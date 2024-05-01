import React, { useState} from 'react'
import { Form, Input, message } from 'antd';
import {useNavigate,useParams} from 'react-router-dom'
import '../styles/Login.css'


const ResetPassword = () => {

const [password,setPassword] = useState({password:""})


  const navigate = useNavigate();
  const {token} = useParams()
  const onfinishHandler = async (password) => {
    try {
      let response = await fetch(`http://localhost:8000/api/auth/resetPassword/${token}`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(password),
      })
      response = await response.json()
      console.log("Response",response);
       if(response.message==='Token is invalid, or expired'){
        message.error('Link expired, Please Try again!!!')
      }
        else if(response){
        message.success('Succesfully Update password')
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
      <h3 className="text-center pb-2">Reset Password</h3>
      <Form.Item label="Password" name="password">
                <Input className='input' type='password' required value={password.password} onChange={(e)=>setPassword(e.target.value)} />
            </Form.Item>
            
            <button className='btn btn-success' type="submit">Update Password</button>

      </Form>
    </div>
    
    </>
  )
}

export default ResetPassword