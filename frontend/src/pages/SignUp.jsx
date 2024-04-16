import React from 'react'
import { Form, Input, Radio, message} from 'antd';
import '../styles/SignUp.css'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


const SignUp = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    role:""
  })
  const navigate = useNavigate();


  const onfinishHandler = async (formData) => {
    console.log(formData);
    try {
      let response = await fetch('http://localhost:8000/api/auth/register',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      response = await response.json()
      if(response){
        message.success("Successfully register")
        navigate('/Login')
      }
      else{
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong!!')
    }
    
  };

      return (
    <>
    <div className="form-container">

        <Form form={form} layout='horizontal' onFinish={onfinishHandler} 
        className='signup-form'>

            <h3 className="text-center pb-2">SignUp</h3>
            <Form.Item label="Name" name="name" >
                <Input type='text' required value={formData.name} onChange = {(e)=>setFormData({...formData,name:e.target.value})}/>
            </Form.Item>
            <Form.Item label="Username" name="username" value = {formData.username} onChange = {(e)=>setFormData({...formData,name:e.target.value})}>
                <Input type='text' required / >
            </Form.Item>
            <Form.Item label="Email" name="email" value = {formData.username} onChange = {(e)=>setFormData({...formData,name:e.target.value})} >
                <Input type='email' required  />
            </Form.Item>
            <Form.Item label="Password" name="password"  value = {formData.username} onChange = {(e)=>setFormData({...formData,name:e.target.value})}>
                <Input type='password' required  />
            </Form.Item>
            <Form.Item label="Select Role" name="role"  value = {formData.username} onChange = {(e)=>setFormData({...formData,name:e.target.value})} >
            <Radio.Group name="radiogroup_role" defaultValue={1}>
                  <Radio className="radio-btn" value="user">User</Radio>
                  <Radio className="radio-btn" value="Diet expert">Diet Expert</Radio>
                </Radio.Group>
            </Form.Item>

            <button className='btn btn-success' type="submit">SignUp</button>

            <p className='text-center mt-2'>Already have an account? <Link to='/Login'>Login</Link></p>
        </Form>
    </div>
    </>
  )
}

export default SignUp