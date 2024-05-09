import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';


const ChatContext = createContext();

// eslint-disable-next-line react/prop-types
const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const navigate = useNavigate(); 

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("auth"));
    setUser(userInfo);

    if (!userInfo) navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

 const ChatState = () => {
  return useContext(ChatContext);
};


export {ChatProvider,ChatState};