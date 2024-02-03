import React, { useState } from 'react';
import {Tooltip} from '@chakra-ui/react';
import {Box,Text} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/button';


import {Menu,MenuButton,MenuDivider,MenuItem,MenuList,} from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { Avatar } from "@chakra-ui/avatar";
import ProfileModal from './ProfileModal';
import { ChatState } from '../../Context/ChatProvider';

const SideDrawer = () => {
    const [search,setSearch] = useState("");
    const [serachResult,setSearchResult] = useState([])
    const [loading,setLoading] = useState(false)
    const [loadingChat,setLoadingChat] = useState();
    const {user} = ChatState()

  return (
    
   <Box style = {{
       display:"flex",
       justifyContent:"space-between",
       alignItems:"center",
       background:"white",
       width:"100%",
       padding:"5px 10px 5px 10px",
       borderWidth:"5px"
   }}
   >
     <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
       <Button variant="ghost">

         <i class="fas fa-search" ></i>
         <Text d={{base:"none",md:'flex'}} px='4'>
            Search User
         </Text>
       </Button>
     </Tooltip>

     <Text fontSize="2xl" fontFamily="Work sans">
          Talk-A-Tive
     </Text>    

     <div>
        <Menu>
            <MenuButton p={1}>
                <BellIcon fontSize="2xl" m={1}/>
                {/* <MenuList></MenuList>     */}
            </MenuButton>
        </Menu>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                <Avatar size='sm' cursor='pointer' name={user.name} src={user.pic}/>
            </MenuButton>

            <MenuList>
                <ProfileModal>
                    <MenuItem>My Profile</MenuItem>
                </ProfileModal>
                <MenuDivider/>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>

     </div>
   </Box>
  )
}

export default SideDrawer
