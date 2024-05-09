
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, Setauth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");

    if (data) {
      const ParseData = JSON.parse(data);
      Setauth({
        ...auth,
        user: ParseData.user,
        token: ParseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, Setauth]}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };








// import {React,createContext, useState,useEffect,useContext} from 'react'

// export const AuthContext = createContext()

//  const AuthProvider = ({Children})=>{
   
//     const[auth,setAuth] = useState({
//         Id:null,
//         token:""
//     })
//     useEffect(()=>{
//         const data = localStorage.getItem('auth')
//         if(data){
//             const ParseData = JSON.parse(data)
//             setAuth({
//                 ...auth,
//                 Id:ParseData.Id,
//                 token:ParseData.token
//             })
//         }
//     },[])
//    return <AuthContext.Provider value={[auth,setAuth]}>
//     {Children}
//    </AuthContext.Provider>
// }

// const useAuth =()=>{
//   return useContext(AuthContext)
// }

//  export { useAuth, AuthProvider };