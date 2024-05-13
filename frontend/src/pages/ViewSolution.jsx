//  import React from 'react'

// // function ViewSolution() {
    
   
// //   return (
// //     <div>
// //        <h1>View Solution page</h1>
// //     </div>
// //   )
// // }

// export default ViewSolution

import React, { useState, useEffect } from 'react';
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

  const handleViewSolution = async (queryId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/solution/viewSolution/${queryId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':getToken()
        },
      });
      if (!response.ok) {
        toast.error('Failed fetch solution')
      }
      const data = await response.json();
      console.log(data); // Display solution details
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>My Queries</h2>
      <ul>
        {/* {queries.length>0 && queries.map((query) => (
          <li key={query._id}>
            {query.content}
            <button onClick={() => handleViewSolution(query.solutionId)}>
              View Solution
            </button>
          </li>
        ))} */}
        {queries.length>0 && queries.map((query)=>{
          return(
            <li key={query._id}>
           content:  {query.content} status :{query.status}
            <button onClick={() => handleViewSolution(query.queryId)}>
              View Solution
            </button>
          </li>
          )
        })}
      </ul>
    </div>
  );
};
 export default MyQueries;

