import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const PostQuery = () => {
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        alert("Query submitted successfully")
        navigate('/')
    }
  return (
    <>
    <Typography variant='h3' textAlign={'center'} >
        Post Your Query Here..
    </Typography>
    <div className='queryForm' 
            style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center"
                }}>
        <div>
            <label htmlFor="name">Name :</label> <br />
            <input type="text" name="name" id="" />
        </div>
        <div>
            <label htmlFor="name">Username :</label> <br />
            <input type="text" name="name" id="" />
        </div>
        <div>
            <label htmlFor="name">Your Query :</label> <br />
            <textarea type="text" name="name" id="" placeholder='Please write your query here..' required/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default PostQuery