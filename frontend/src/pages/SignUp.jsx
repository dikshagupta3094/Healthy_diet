<<<<<<< HEAD
// import React from 'react'
// import Signup from '../assets/Signup.jpg'
=======
import React from 'react'
import { Form, Input, Radio, message} from 'antd';
import '../styles/SignUp.css'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
>>>>>>> d29de792e7b305676811f6faff6e74ade0ce35e1

// const SignUp = () => {
//   return (
//     <>
//     <div className="w-full min-h-screen flex items-start flex-col ">
//       <div className="relative w-1/2 h-full ">
//         <img src={Signup} alt="image" className="w-2/3 h-2/3" />
//       </div>
//       <div className="form-container sign-up-container">
//         <form action="#">
//           <h1>Create account</h1>
      
//           <input type="text" placeholder="Name" /><br/>
//           <input type="text" placeholder="Username" /><br/>
//           <input type="email" placeholder="Email address" /><br/>
//           <input type="password" placeholder="Password" /><br/>
//           <input type="password" placeholder="Confirm Password" /><br/>
//           <label htmlFor="role">   
// Role :  
// </label>  
// <br/>  
// <label>
//             <input type="radio" value="option1" />
//             Option 1
//           </label>
//           <label>
//             <input type="radio" value="option2" />
//             Option 2
//           </label>  
//           <button>Sign Up</button>
//         </form>
//       </div>

<<<<<<< HEAD
//     </div>
//   </>
//   )
// }

// export default SignUp;
=======
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
>>>>>>> d29de792e7b305676811f6faff6e74ade0ce35e1

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

<<<<<<< HEAD
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
=======
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
>>>>>>> d29de792e7b305676811f6faff6e74ade0ce35e1
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}