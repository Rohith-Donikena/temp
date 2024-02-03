import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from '../Components/miscellaneous/SideDrawer';
import ChatBox from '../Components/ChatBox';
import MyChats from '../Components/MyChats';



const ChatPage = () => {
  const {user} = ChatState()
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "91.5vh", padding: "10px" }}>
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
);

}

export default ChatPage
