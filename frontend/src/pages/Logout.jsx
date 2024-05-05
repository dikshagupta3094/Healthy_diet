import {React,useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {message } from 'antd';
import cookies from 'js-cookie'
const Logout = ()=>{
    // const navigate = useNavigate()
    //  useEffect(()=>{
    //     // fetch('http://localhost:8000/api/auth/logout',{
    //     //     method:'GET',
    //     //     credentials:'include'
    //     // }).then((res)=>{
    //     //   console.log("RESPONSE",res);
    //     //   const removeCookie = cookies.remove('token')
        
    //       // if(removeCookie){
    //       //   message.success('Logged out successfully')
    //       //   Navigate('/login')
    //       // }
    //       localStorage.rzzzzzzz
    //     }).catch((error)=>{
    //       console.log("ERROR",error);
    //       message.error("Something went wrong")
    //     })
    //  })
    useEffect(()=>{
       localStorage.removeItem('token')
       message.success('Logged out successfully')
    },[])
    return <Navigate to={'/login'}/>
}

export default Logout