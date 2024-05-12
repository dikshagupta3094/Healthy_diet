import { Skeleton, Stack } from '@mui/material'
// import React from 'react'

const ChatLoading = () => {
  return (
    <Stack>
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
        <Skeleton animation="wave" height={'45px'} />
    </Stack>
  )
}

export default ChatLoading