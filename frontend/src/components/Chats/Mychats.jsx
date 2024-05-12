import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ChatLoading from '../ChatLoading';
import {getSender} from '../config/ChatLogics'
import { ChatState } from '../../store/ChatProvider';

const getToken = () => {
  const authInfo = localStorage.getItem('auth');
  if (!authInfo) {
    return null; // or handle the absence of token in a different way
  }
  const { token } = JSON.parse(authInfo);
  return token;
};

const token = getToken()
console.log(token);
const Mychats = () => {
  const [loggedUser, setLoggedUser] = useState();
  
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          'x-access-token':getToken()
        },
      };

      const { data } = await axios.get("http://localhost:8000/api/chat/fetchChat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("auth")));
    fetchChats();
  }, []); // Remove fetchAgain if not intended as a dependency
  


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        padding: "8px",
        bgcolor:"white",
        width:"31%",
        borderRadius:"8px",
        borderWidth:"1px"
      }}
    >
      <Box
      sx={{
        paddingBottom:"5px",
        paddingX:"5px",
        fontSize:"30px",
        fontFamily: "Work sans",
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center"
      }}
      >
        My Chats
      </Box>

      <Box sx={{
        display:"flex",
        flexDirection:"column",
        padding:"5px",
        bgcolor:"#F8F8F8",
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        overflowY:"hidden"
      }}
      >
         {chats ? (
          <Stack sx={{overflowY:"scroll"}}>
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Typography>
                {
                  getSender(loggedUser, chat.users)
                }
                </Typography>
                {chat.latestMessage && (
                  <Typography fontSize="xs">
                    <b>{chat.latestMessage.sender.name} : </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading/>
        )}
      </Box>
    </Box>
  )
}

export default Mychats