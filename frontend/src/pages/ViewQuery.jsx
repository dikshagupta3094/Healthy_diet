import React from 'react'
import {useEffect,useState} from 'react'
// import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
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
    useEffect(()=>{
        const fetchQueries = async()=>{
           try {
            let response = await fetch('http://localhost:8000/api/query/viewQuery',{
                method:'GET',
                headers: {
                    'x-access-token': getToken(),
                    'Content-Type': 'application/json'
                   },
            })
            response = await response.json()
            setUserQueries(response.expertQueries)
            console.log("response",userQuery);
            if(response.message === 'Query fetched successfully'){
              toast.success('Query fetched successfully')
            }
           } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
           }
        }
        fetchQueries()
    },[])

  return (
    <div>
       <div>
            <h2> View Query page</h2>
            <ul>
            {userQuery && userQuery.map((query) =>{
              return(
                <div>
                  <li key={query._id}>Content: {query.content}</li>
                   <NavLink to={`PostSolution/${query._id}`}>
                    <button type='submit'>Post Solution</button>
                   </NavLink>
                </div>
              )
            })
            
       }

            </ul>
        </div>
    </div>
  )
}

export default ViewQuery


//<li key={query._id}>Content: {query.content}</li>