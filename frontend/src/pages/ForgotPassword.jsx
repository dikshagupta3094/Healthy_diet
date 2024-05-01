import React, { useState } from 'react'
import { Form, Input, message } from 'antd';
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css';


const forgotPassword = () => {

const [email,setEmail] = useState({email:""})
  const navigate = useNavigate();
  const onfinishHandler = async (email) => {
    try {
      let response = await fetch('http://localhost:8000/api/auth/forgotPassword',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
      })
      response = await response.json()
      if(response){
        message.success('Email has been sent to your registered mail ID')
        navigate('/login')
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
      <h3 className="text-center pb-2">Forgot Password</h3>
      <Form.Item label="Email" name="email" >
                <Input className='input' type='email' required value={email.email} onChange={(e)=>setEmail(e.target.value)}  />
            </Form.Item>
            
            <button className='btn btn-success' type="submit">Reset Password</button>
      </Form>
    </div>
    
    </>
  )
}

export default forgotPassword