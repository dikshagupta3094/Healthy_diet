
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
const MyQueries = () => {
  const [queries, setQueries] = useState([]);

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
        const response = await fetch('http://localhost:8000/api/solution/fetchQueries', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token':getToken()
          },
        });
        if (!response.ok) {
          toast.error('Failed to fetch queries')
          throw new Error('Failed to fetch queries');
        }
        const data = await response.json();
        console.log("Query data",data);
        setQueries(data.userQueries);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQueries();
  }, []);

  return (
    <div>
    <h2 style={{
      fontFamily:"Work Sans",
      textAlign:'center',
      padding:"20px"
    }}>My Queries</h2>
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"85vh",
      overflowY:'hidden',
    }}>
      <ul style={{ listStyle:"none"}}>
        {queries.length>0 && queries.map((query)=>{
          return(
            <li key={query._id}>
          <li style={{fontSize:"18px",padding:"10px"}}> Content:  {query.content}</li>
          <li style={{fontSize:"18px",padding:"10px"}}> Status :{query.status}</li>
             <li style={{fontSize:"18px",padding:"10px"}}><NavLink to= {`viewSolution/${query._id}`}>
              <button style={{
                 
                  padding:"12px", 
                  fontSize:"18px",
                  backgroundColor:"#65b741",
                  color:"white",
                
                  borderColor:"transparent",
                  borderRadius:"7px"
              }}>
              View Solution
              </button>
             </NavLink></li>
          </li>
          )
        })}
      </ul>
    </div>
    </div>
  );
};
 export default MyQueries;

