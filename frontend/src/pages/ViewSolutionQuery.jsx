import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function ViewSolutionQuery() {
 const[solution,setSolution] = useState([])
 const {queryId} = useParams()
 const navigate = useNavigate()
    const getToken = () => {
        const authInfo = localStorage.getItem('auth');
        if (!authInfo) {
          return null; // or handle the absence of token in a different way
        }
        const { token } = JSON.parse(authInfo);
        return token;
      };

     useEffect(()=>{
        const fectSolution = async()=>{
       try {
        let response = await fetch(`http://localhost:8000/api/solution/viewSolution/${queryId}`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token':getToken()
            }
        })
         response = await response.json()
        //  setSolution(response.solution)
        setSolution(Array.isArray(response.solution) ? response.solution : [response.solution]);
         console.log(response.solution);
         if(response.messgae==='Query id not found'){
           toast.error('Error while fetching solution')
         }
         if(response.messgae === 'Solution fetched'){
          toast.success("Solution")
          navigate('/')
         }
        }
        catch (error) {
           toast.error("Failed")
           console.log(error)
       } 
       }
       fectSolution()
     },[queryId])
  return (
    <div>
      <h1>View Solution</h1>
      <ul>
       {solution !== null && solution.map((sol)=>{
        console.log("Lenght",sol.length);
        return(
         <div key={sol._id}>
             <li> Content: {sol.content}</li>
         </div>
        )
       })}
      </ul>
      
    </div>
  )
}

export default ViewSolutionQuery

