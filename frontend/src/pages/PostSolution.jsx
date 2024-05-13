import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { io } from 'socket.io-client';
const socket  = io('http://localhost:8000')
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
            socket.emit('postSolution', content, queryId);
            console.log( socket.emit('postSolution', content, queryId));
            navigate('/')
        }
        else{
            toast.error('Error! while posting solution')
            return;
        }
     } catch (error) {
        console.log(error);
        toast.error('Some internal error occured')
     }
    }
  return (
    <div>
      <h1>Post Solution</h1>
      <input type="text" placeholder='Post solution' required value={content} onChange={(e)=>{setContent(e.target.value)}} />
       <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default PostSolution
