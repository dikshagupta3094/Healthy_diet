import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App.jsx'
import './index.css'
// import { AuthProvider } from './store/Auth.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import {ChatProvider} from './store/ChatProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <ChatProvider>
    <BrowserRouter>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition: Bounce
    />
    </BrowserRouter>
    </ChatProvider>
  </React.StrictMode>
  

)
