import React from 'react'
import Grid from '@mui/material/Grid'
import VideoItem from './VideoItem'

const VideoList = ({videos,onVideoSelect}) => {
  const ListofVideos = videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return (
    <Grid container spacing={12}>

      {ListofVideos}
    </Grid>
  )
}

export default VideoList
