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

  searchVideos = async (term) => {
    const response = await axios.get('/search/', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video})
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.searchVideos} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect = {this.onVideoSelect}/>
      </div>
    )
  }
}
