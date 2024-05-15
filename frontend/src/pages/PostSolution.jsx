//post solution

import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function PostSolution() {
    const [content,setContent] = useState('')
    const navigate  = useNavigate()
    const {queryId} = useParams()
    const handleSubmit = async(e)=>{
        e.preventDefault() // Prevent default form submission 
        const getToken = () => {
        const authInfo = localStorage.getItem('auth');
        if (!authInfo) {
        return null; // or handle the absence of token in a different way
        }
       const { token } = JSON.parse(authInfo);
       return token;
    };
     try {
        let response = await fetch(`http://localhost:8000/api/solution/postSolution/${queryId}`,{
            method:'POST',
            headers:{
                'x-access-token':getToken(),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({content})
        })
        response = await response.json()
        console.log(response);
        if(response.message === "Solution posted successfully"){
            toast.success('Solution posted successfully')
            navigate('/')
        }
        else{
            toast.error('Error! while posting solution')
            return;
        }
     }
     catch (error) {
      console.log(error);
      toast.error('Some internal error occured')
     }
    }
  return (
    <div style={{
      backgroundColor:"#9DDE8B",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      // justifyContent:"center",
      overflowY:"hidden"
    }}>
      <div>
      <Typography variant="h3" sx={{
        fontFamily:"Work Sans",
        padding:"30px",
        textAlign:"center"
      }}>
        Post Solution
      </Typography>
      </div>

      <div style={{
        margin:"20px auto"
      }}>
       <textarea placeholder='Write solution here..' cols={80} rows={10} required value={content} 
       style={{
        padding: "20px",
        fontSize:'18px',
        transition: 'blue 0.3s ease-in-out',
        ':focus': 
                  {
                  borderColor: 'blue', 
                  }
       }}
       onChange={(e)=>{setContent(e.target.value)}} />
       <br />
       <button 
       style={{
        border:"transparent",
        padding:"8px 5px",
        width:"30%",
        margin:"10px auto",
        alignContent:"center",
        borderRadius:"8px"
       }}
       type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default PostSolution