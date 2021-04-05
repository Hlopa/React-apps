import React from 'react';
import VideoItem from './video-item';

const VideoList = (props) => {

  const list = props.videos.map((item) => {
   return <VideoItem 
    key={item.id.videoId}  
    data={item} 
    onVideoSelect = {props.onVideoSelect}/>
  })

  return (
  <div className='ui relaxed divided list'>{list}</div>
  )
}

export default VideoList;
