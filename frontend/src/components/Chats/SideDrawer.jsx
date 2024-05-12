
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Button, Menu, Tooltip, Typography, MenuItem, IconButton, Avatar, ListItemIcon, Drawer, TextField, CircularProgress, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { toast } from 'react-toastify'
import axios from "axios";
import ChatLoading from '../ChatLoading';
import UserListItem from '../UserAvatar/UserListItem';
import { ChatState } from '../../store/ChatProvider';

// notification variables
const options = [
  'None',
  'Atria',
  'Callisto',
];

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
const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const navigate = useNavigate();
  const {
    user,
    setSelectedChat,
    chats,
    setChats
  } = ChatState;


  //logout functionality starts
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  // logout ends

  
  {/* //notificationsbell function starts */ }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  {/* //notifications bell function ends */ }


  //Avatar function start
  const [anchorEle, setAnchorEle] = React.useState(null);
  const openAvatar = Boolean(anchorEle);
  const handleClickAvatar = (event) => {
    setAnchorEle(event.currentTarget);
  };
  const handleCloseAvatar = () => {
    setAnchorEle(null);
  };
  //avatar function ends


  //search function
  const handleSearch = async(event) => {
    event.stopPropagation();
    if (!search) {
      toast.warn("Please enter something in search", {
        duration: 3500,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          'x-access-token':getToken(),
          'Content-Type': 'application/json'
        },
      };

      const { data } = await axios.get(`http://localhost:8000/api/auth/getAllUser?${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast.error("Error Occured!", {
        duration: 3500,
        position: "bottom-left",
      });
    }
  };
  //search function ends



  //access chat handler starts
  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          'x-access-token':getToken()
        }
      };
      const { data } = await axios.post(`http://localhost:8000/api/chat/accessChat`,{userId}, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      toggleDrawer(false);
    } 
    catch (error) {
      toast.error("Error fetching the chat", {
        duration: 4000,
        position: "bottom-left",
      });
    }
  };
  //access chat ends


  //side drawer toggle functionality
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  {/* side drawer starts */ }
  const DrawerList = (
    <div   onClick={(e) => {
      e.stopPropagation();
    }}style={{ width: 300 }} role="presentation">
      <Box d="flex" pb={2}>
        <TextField id="outlined-basic"
          label="Search here"
          variant="outlined"
          size="small"
          margin='dense'
          value={search}
          sx={{ marginLeft: "8px" }}
          onChange={(e) => setSearch(e.target.value)
          } />
        <Button
          sx={{
            margin: "10px 0 0"
          }}
          onClick={handleSearch}>Go</Button>
      </Box>
      {loading ? (
        <ChatLoading />
      ) : (
        searchResult?.map((user) => (
          <UserListItem
            key={user._id}
            user={user}
            handleFunction={() => accessChat(user._id)}
          />
        ))
      )}
      {loadingChat && <CircularProgress sx={{ marginLeft: "auto", display: "flex" }} />}
    </div>
  )
  return <>
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      bgcolor: "whitesmoke",
      width: "100%",
      padding: "5px 10px 5px 10px",
      border: "5px"
    }}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={'white'}
      width={"100%"}
      padding={"5px 10px 5px 10px"}
      border={"5px"}
    >
      <Tooltip title="Search Dietitians to consult" arrow>
        <Button variant="ghost" onClick={toggleDrawer(true)}>
          <SearchIcon/>
          <Typography display={'flex'} padding={"4px"}>
            Search Dietitian
          </Typography>
        </Button>
      </Tooltip>
      <Typography fontSize="24px" fontFamily="Work sans" fontWeight={600}>
        Diet Dynamo
      </Typography>
      <div style={{ display: "flex" }}>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            size='large'
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <NotificationsIcon/>
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'None'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClickAvatar}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openAvatar ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openAvatar ? 'true' : undefined}
            >
              <Avatar src="/broken-image.jpg" />
              <KeyboardArrowDownIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEle}
            id="account-menu"
            open={openAvatar}
            onClose={handleCloseAvatar}
            onClick={handleCloseAvatar}
          >

            <MenuItem onClick={logoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Box>


    <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  </>
}
export { SideDrawer };