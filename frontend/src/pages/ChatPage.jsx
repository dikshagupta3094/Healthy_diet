// import {ChatState} from '../store/ChatProvider'
// import { Box } from "@mui/material";
// import {SideDrawer} from '../components/Chats/SideDrawer.jsx'
// import Mychats from '../components/Chats/Mychats.jsx'
// import ChatBox from '../components/Chats/ChatBox.jsx'
// const ChatPage = ()=>{
//     const {user} = ChatState()

//     return <div style={{width:'100%'}}>
//      {user && <SideDrawer/>}
//      <Box>
//      {user && <Mychats/>}
//      {user && <ChatBox/>}
//      </Box>
//     </div>
// }


// export default ChatPage

import {ChatState} from '../store/ChatProvider'
import { Box } from "@mui/material";
import {SideDrawer} from '../components/Chats/SideDrawer.jsx'
import Mychats from '../components/Chats/Mychats.jsx'
import ChatBox from '../components/Chats/ChatBox.jsx'
import { useState } from 'react';



const ChatPage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    // const { user } = ChatState();
  

return <div style={{width:'100%', background:"#65b741"}}>
    
 {<SideDrawer/>}   
 <Box sx={{
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    height:"91.5vh",
    padding:"10px"
 }}>
  { <Mychats fetchAgain={fetchAgain} />} 
    { (<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}  
 </Box>
</div>
}

export default ChatPage