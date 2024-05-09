import { Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import OurExpert from './pages/OurExpert';
import ContactUs from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Logout from './pages/Logout'
import PostQuery from './pages/PostQuery';
import ChatPage from './pages/ChatPage'
import {io} from 'socket.io-client'
import { useEffect} from 'react';
function App() {
  //Socket io
  const socket = io('http://localhost:8000')
    useEffect(()=>{
      socket.on("connect",()=>{
        console.log("Connected");
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>  
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Logout" element={<Logout/>}/>
      <Route path='/experts'element={<OurExpert/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/PostQuery" element={<PostQuery/>}/>
      <Route path="/ChatPage" element={<ChatPage/>}/>
      <Route path="*" element={< PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App

