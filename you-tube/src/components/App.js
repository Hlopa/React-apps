import React, { Component } from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';
import axios from '../api/youtube-api';

export default class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount(){
    this.searchVideos('space')
  }

  searchVideos = async (term) => {
    const response = await axios.get('/search/', {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.searchVideos} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
