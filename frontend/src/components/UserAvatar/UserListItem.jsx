import { Avatar, Box, Typography } from '@mui/material'
import { ChatState } from '../../store/ChatProvider'
// import React from 'react'


    // eslint-disable-next-line react/prop-types
    const UserListItem = ({ handleFunction }) => {
        const { user } = ChatState();

        return (
            <div>
                <Box onClick={handleFunction}
                    sx={{
                        cursor: "pointer",
                        bgcolor: "#E8E8E8",
                        "&:hover": {
                            bgcolor: "#38B2AC",
                            color: "white",
                        },
                        width: "100%",
                        dispaly: "flex",
                        alignItems: "center",
                        color: "black",
                        paddingX: "5px",
                        paddingY: "5px",
                        marginBottom: "5px",
                        borderRadius: "10px"
                    }}>
                    <Avatar sizes=''
                        sx={{
                            marginRight: "5px",
                            cursor: "pointer",
                            // name:{user.name},
                            name: "Diet Expert",
                            src: "/broken-image.jpg"
                        }}
                    />
                    <Box>
                        {/* <Typography>{user.name}</Typography> */}
                        <Typography>Diet Expert</Typography>
                        <Typography fontSize="xs">
                            <b>Email : </b>
                            {user.email}
                        </Typography>
                    </Box>
                </Box>
            </div>
        )
    }

    export default UserListItem