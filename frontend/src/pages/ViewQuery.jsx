// import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';
function ViewQuery() {
  // const { expertId } = useParams();
  const [userQuery, setUserQueries] = useState([]);
  const getToken = () => {
    const authInfo = localStorage.getItem('auth');
    if (!authInfo) {
      return null; // or handle the absence of token in a different way
    }
    const { token } = JSON.parse(authInfo);
    return token;
  };
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        let response = await fetch('http://localhost:8000/api/query/viewQuery', {
          method: 'GET',
          headers: {
            'x-access-token': getToken(),
            'Content-Type': 'application/json'
          },
        })
        response = await response.json()
        setUserQueries(response.expertQueries)
        console.log("response", userQuery);
        if (response.message === 'Query fetched successfully') {
          toast.success('Query fetched successfully')
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }
    }
    fetchQueries()
  }, [])

  return (
    <>
      <Layout>
    <Box sx={{margin:"0", padding:"0", height:"100%"}}>
      <div style={{
      background:"#9DDE8B",
      paddingBottom:"25px"
    }}>
      <div>
        <Typography variant="h3" margin="0 auto" paddingY="30px" textAlign="center" fontFamily={"Work Sans"}> View Query </Typography>
        <div style={{
              backgroundColor:"#FFFAE6",
              borderRadius:"8px",
              margin:"5px",
              padding:"20px 45px"
        }}>
        <ul>
          {userQuery && userQuery.map((query) => {
          
            return (
              <div key={query._id} style={{display:"flex",flexDirection:"column", fontSize:"18px", borderBottom:"1px solid grey", marginBottom: "20px", padding: "10px"}}>
                <div style={{width:"60%"}}>
                <li><b>Age:</b> {query.age} </li>
                <li><b>Dietary Goals:</b> {query.dietaryGoals}</li>
                <li><b>Content:</b> {query.content} </li>
                <li><b>Status:</b> {query.status} </li>
                </div>
                {query.status === 'answered' ? (
                        <button 
                          type='button' 
                          style={{
                            marginLeft:"1000px", 
                            padding:"12px", 
                            fontSize:"18px",
                            backgroundColor:"#ccc", 
                            color:"white",
                            width:"18%",
                            borderColor:"transparent",
                            borderRadius:"7px",
                            cursor: "not-allowed" 
                          }}
                          disabled
                        >
                          Posted
                        </button>
                      ) : (
                        <NavLink to={`PostSolution/${query._id}`} >
                          <button 
                            type='button' 
                            style={{
                              marginLeft:"1000px", 
                              padding:"12px", 
                              fontSize:"18px",
                              backgroundColor:"#65b741",
                              color:"white",
                              width:"18%",
                              borderColor:"transparent",
                              borderRadius:"7px"
                            }}
                          >
                            Post Solution
                          </button>
                        </NavLink>
                      )}
              </div>
            )
          })}
        </ul>
        </div>
      </div>
      </div>
  </Box>
    </Layout>
    </>
  );
}

export default ViewQuery

