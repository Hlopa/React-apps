import React from 'react';
import './video-item.css'


const VideoItem = ({data, onVideoSelect}) => {
  
  return (
    <div className='video-item item' onClick={() => onVideoSelect(data)}>
      <img 
        className='ui image' 
        src={data.snippet.thumbnails.medium.url} 
        alt={data.snippet.title}/>
      <div className='content'>
        <div className='header'>
          {data.snippet.title}
        </div>
        </div>
    </div>
  )
}

export default VideoItem;