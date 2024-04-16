import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
<<<<<<< HEAD
import OurExpert from './pages/OurExpert';

=======
import ForgotPassword from './pages/ForgotPassword'
>>>>>>> d29de792e7b305676811f6faff6e74ade0ce35e1
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
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
