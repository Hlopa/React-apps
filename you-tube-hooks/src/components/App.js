import React, { useState, useEffect } from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';
import useVideos from '../hooks/useVideous';


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('space');

  useEffect(()=> {
    setSelectedVideo(videos[0])
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

//(video) => setSelectedVideo(video) === setSelectedVideo
