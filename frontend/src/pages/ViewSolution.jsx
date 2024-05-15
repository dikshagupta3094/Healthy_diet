
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
      <h2>My Queries</h2>
      <ul>
        {queries.length>0 && queries.map((query)=>{
          return(
            <li key={query._id}>
           content:  {query.content} status :{query.status}
             <NavLink to= {`viewSolution/${query._id}`}>
              <button>
              View Solution
              </button>
             </NavLink>
          </li>
          )
        })}
      </ul>
    </div>
  );
};
 export default MyQueries;

