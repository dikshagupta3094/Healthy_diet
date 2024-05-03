import {React,useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {message } from 'antd';
const Logout = ()=>{
    // const navigate = useNavigate()
     useEffect(()=>{
        fetch('http://localhost:8000/api/auth/logout',{
            method:'GET'
        }).then((res)=>{
          message.success('Logged out successfully')
          if(res.status !==200){
             message.error("Error")
          }
        })
     })
    return <Navigate to={'/login'}/>
}

export default Logout