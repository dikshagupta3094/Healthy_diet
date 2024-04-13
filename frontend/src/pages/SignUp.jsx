// import React from 'react'
import { Form, Input, Radio, message} from 'antd';
import '../styles/SignUp.css'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {

  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/auth/register', values)
      if(res.data.success){
        message.success('Successfully Signed Up!')
        navigate('/Login')
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
    <div className="form-container">

        <Form layout='horizontal' onFinish={onfinishHandler} 
        className='signup-form'>

            <h3 className="text-center pb-2">SignUp</h3>
            <Form.Item label="Name" name="name" >
                <Input type='text' required />
            </Form.Item>
            <Form.Item label="Username" name="username" >
                <Input type='text' required />
            </Form.Item>
            <Form.Item label="Email" name="email" >
                <Input type='email' required />
            </Form.Item>
            <Form.Item label="Password" name="password" >
                <Input type='password' required />
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirm password" >
                <Input type='password' required />
            </Form.Item>
            <Form.Item label="Gender" name="gender" >
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Radio className="radio-btn" value={1}>Male</Radio>
                  <Radio className="radio-btn" value={2}>Female</Radio>
                  <Radio className="radio-btn" value={3}>Others</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Mobile Number" name="mobile_num" >
                <Input type='number' required />
            </Form.Item>
            <Form.Item label="Select Role" name="role" >
            <Radio.Group name="radiogroup_role" defaultValue={1}>
                  <Radio className="radio-btn" value={1}>User</Radio>
                  <Radio className="radio-btn" value={2}>Diet Expert</Radio>
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