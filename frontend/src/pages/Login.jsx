import  { useState } from 'react'
import { Form, Input, message } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Login.css'
// import { useForm } from 'antd/es/form/Form';

const Login = () => {

const [formData,setFormData] = useState({
  email:"",
  password:"",
})
  const navigate = useNavigate();
  const onfinishHandler = async (formData) => {
    try {
      let response = await fetch('http://localhost:8000/api/auth/login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      response = await response.json()
      if(response){
        localStorage.setItem("token",response.data.token)
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
                <Input className='input' type='email' required value={formData.email} onChange={(e)=>setFormData(e.target.value)} />
            </Form.Item>
            <Form.Item label="Password" name="password" value={formData.password} onChange={(e)=>setFormData(e.target.value)}>
                <Input className='input' type='password' required />
            </Form.Item>
            <Link to='/forgotPassword'>Forgot Password?</Link>
            <button className='btn btn-success' type="submit">Login</button>

            <p className='text-center mt-2'>Create an account. <Link to='/signup'>SignUp</Link></p>
      </Form>
    </div>
    
    </>
  )
}

export default Login