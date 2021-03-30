import axios from 'axios';

const KEY = 'AIzaSyDZlC1wHtWMGa0eUYdasFb3J3ez1WrQWxw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
});
