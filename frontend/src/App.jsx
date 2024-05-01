import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword'
import OurExpert from './pages/OurExpert'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/experts" element={<OurExpert/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
