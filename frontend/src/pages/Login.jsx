// import React from 'react'
import { Form, Input, message } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/auth/login', values)
      if(res.data.success){
        localStorage.setItem("token",res.data.token)
        message.success('Successfully Logged In!')
        navigate('/')
      }else{
        message.error(res.data.message);
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
                <Input className='input' type='email' required />
            </Form.Item>
            <Form.Item label="Password" name="password" >
                <Input className='input' type='password' required />
            </Form.Item>
            <Link to='/forgotpassword'>Forgot Password?</Link>
            <button className='btn btn-success' type="submit">Login</button>

            <p className='text-center mt-2'>Create an account. <Link to='/SignUp'>SignUp</Link></p>
      </Form>
    </div>
    
    </>
  )
}

export default Login