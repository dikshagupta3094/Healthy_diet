import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/PostQuery.css'
import { toast } from 'react-toastify';

const PostQuery = () => {
  const [formData, setFormData] = useState({
    name:"",
    age:"",
    dietaryGoals:"",
    content:""
  })
  
  const navigate = useNavigate();
  const {expertId} = useParams()
  console.log("ExpertId",expertId);
  const handleSubmit = async (e) => {
    
    e.preventDefault() // Prevent default form submission
    const getToken = () => {
      const authInfo = localStorage.getItem('auth');
      if (!authInfo) {
        return null; // or handle the absence of token in a different way
      }
      const { token } = JSON.parse(authInfo);
      return token;
    };
    const token = getToken()
    console.log(token);
    try {
      let response = await fetch(`http://localhost:8000/api/query/postQuery/${expertId}`,{
        method: 'POST',
        headers: {
          'x-access-token': getToken(),
          'Content-Type': 'application/json'
         },
        body: JSON.stringify(formData)
      })
        
      response = await response.json()
      console.log("Response",response);
     if(response.message === 'You have already posted the same content to this expert'){
      toast.error('Please do not post same content again')
      }
     else if(response.message === "Query posted successfully"){
        toast.success('Query posted successfully!')
        navigate('/experts')
      }
      else if(response.message === 'Only user can post query'){
        toast.error('Sorry! Only user can post query')
        navigate('/')
      }
      else{
        toast.error('Failed to submit query')
        return;
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")

    }
  };

  return (
    <>
    <Box overflow={'hidden'}>
      <Typography variant='h3' textAlign={'center'} marginY={"20px"}>
        Post Your Query Here..
      </Typography>
      <div className="queryForm">
      <form onSubmit={handleSubmit}>
        {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
        <div>
          <label htmlFor="name">Name :</label>
          <br />
          <input type="text" name="name" id="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} required autoComplete='off'/>
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <br />
          <input type="number" name="age" id="age" value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})} autoComplete="off" required />
        </div>
        <div>
          <label htmlFor="dietaryGoals">Your Dietary Goals :</label>
          <br />
          <input type="text" name="dietaryGoals" id="dietaryGoals" value={formData.dietaryGoals} onChange={(e)=>setFormData({...formData,dietaryGoals:e.target.value})} autoComplete="off" required />
        </div>
        <div>
          <label htmlFor="query">Your Query :</label>
          <br />
          <textarea type="text" name="query" id="query" rows={5} cols={65} value={formData.content} onChange={(e)=>setFormData({...formData,content:e.target.value})} placeholder="Please write your query here.." autoComplete="off" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </Box>
    </>
  );
};

export default PostQuery;
