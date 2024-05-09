import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/Auth.jsx'
import {ChatProvider} from './store/ChatProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <AuthProvider>
    <ChatProvider>
    <App />
    </ChatProvider>
    </AuthProvider>
    </BrowserRouter>
   
    </React.StrictMode>
 

)
