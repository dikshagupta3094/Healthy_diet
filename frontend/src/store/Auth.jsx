import {React,createContext, useState,useEffect,useContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({Children})=>{
   
    const[isLoggedIn,setisLoggedIn] = useState(false)

    // useEffect(() => {
    //     const data = localStorage.getItem('token');
    //       console.log("Data",data);
    //     if (data) {
    //     //   const ParseData = JSON.parse(data);
    //     //   console.log(ParseData.user,ParseData.token);
    //     //   setisLoggedIn({
    //     //     ...isLoggedIn,
    //     //     isLoggedIn: ParseData.user,
    //     //     token: ParseData.token,
    //     //   });
    //     setisLoggedIn(true)
    //     }
    //   }, []);
    
    // const storeTokenInLS = (serverToken)=>{
    //   return localStorage.setItem('token',serverToken)
    // }
    useEffect(()=>{
    const data = localStorage.getItem('token')
    if(data){
        setisLoggedIn(true)
    }
    else{
        setisLoggedIn(false)
    }
    },[])
   return <AuthContext.Provider value={[isLoggedIn,setisLoggedIn]}>
    {Children}
   </AuthContext.Provider>
}

export const useAuth =()=>{
  return useContext(AuthContext)
}