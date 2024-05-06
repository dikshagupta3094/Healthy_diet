import {React,useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
import {message } from 'antd';


const Logout = ()=>{
    const [auth,setAuth] = useState(false)
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
    //      
    //     }).catch((error)=>{
    //       console.log("ERROR",error);
    //       message.error("Something went wrong")
    //     })
    //  })
    useEffect(()=>{
        setAuth({
            ...auth, 
            Id: "",
            token: "",
          });
          localStorage.removeItem(
            "auth",
           
          );
    //    localStorage.removeItem('token')
      setAuth(false)
       message.success('Logged out successfully')
    },[])
    return <Navigate to={'/login'}/>
}

export default Logout