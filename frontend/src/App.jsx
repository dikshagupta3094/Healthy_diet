import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import OurExpert from './pages/OurExpert';
import ForgotPassword from './pages/ForgotPassword';
import ContactUs from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/about" element={<About/>}/> 
      <Route path="/experts" element={<OurExpert/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="*" element={< PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
