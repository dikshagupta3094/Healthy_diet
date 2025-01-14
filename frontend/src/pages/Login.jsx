import  { useState } from 'react'
import { Form, Input, message } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../store/Auth"
import '../styles/Login.css'
const Login = () => {
  const [auth,setAuth] = useAuth();
const [formData,setFormData] = useState({
  email:"",
  password:"",
})

  const navigate = useNavigate();
  const onfinishHandler = async (formData) => {
    try {
      let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
       
      })
      response = await response.json()
      console.log("Response",response);
      if(response.message==='Email and password does not match'){
        message.error('Invalid Email and password')
      }
      else if(response.message==="Please verifed your email first"){
        message.error('Email is not verified')
      }
     else if(response){
      setAuth({
        ...auth, 
        user: response.data ,
        token: response.token,
      });     
      localStorage.setItem(
        "auth",
        JSON.stringify({  user: response.data, token: response.token })
      );
        setAuth(true)
        message.success('Successfully Logged In!')
        navigate('/')
      }else{
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong!!')
    }
  };

  return (
    <>
    <div className="container">
      <Form layout='vertical' onFinish={onfinishHandler} className='login-form'>
      <h3 className="text-center pb-2">Login</h3>
      <Form.Item label="Email" name="email" >
                <Input className='input' type='email' required value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input className='input' type='password' required value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
            </Form.Item>
            <Link to='/forgotpassword'>Forgot Password?</Link>
            <button className='btn btn-success' type="submit">Login</button>

            <p className='text-center mt-2'>Create an account. <Link to='/signup'>SignUp</Link></p>
      </Form>
    </div>
    
    </>
  )
}

export default Login