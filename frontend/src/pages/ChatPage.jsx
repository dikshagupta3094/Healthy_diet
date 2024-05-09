import {ChatState} from '../store/ChatProvider'
import { Box } from "@mui/material";
import {SideDrawer} from '../components/Chats/SideDrawer.jsx'
import Mychats from '../components/Chats/Mychats.jsx'
import ChatBox from '../components/Chats/ChatBox.jsx'
const ChatPage = ()=>{
    const {user} = ChatState()

    return <div style={{width:'100%'}}>
     {user && <SideDrawer/>}
     <Box>
     {user && <Mychats/>}
     {user && <ChatBox/>}
     </Box>
    </div>
}


export default ChatPage