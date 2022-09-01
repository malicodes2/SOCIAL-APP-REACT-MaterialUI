import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
        <Post url='https://images.pexels.com/photos/3794920/pexels-photo-3794920.jpeg'/>
        <Post url='https://images.pexels.com/photos/5833890/pexels-photo-5833890.jpeg'/>
        <Post url='https://images.pexels.com/photos/2422463/pexels-photo-2422463.jpeg'/>
        <Post url='https://images.pexels.com/photos/2679814/pexels-photo-2679814.jpeg'/>
        <Post url='https://images.pexels.com/photos/3780476/pexels-photo-3780476.jpeg'/>
        <Post url='https://images.pexels.com/photos/8383262/pexels-photo-8383262.jpeg'/>
    </Box>
  )
}

export default Feed