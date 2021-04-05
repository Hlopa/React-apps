import {useState, useEffect} from 'react';
import axios from '../api/youtube-api';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(defaultSearchTerm)
  }, [defaultSearchTerm]);

  const searchVideos = async (term) => {
    const response = await axios.get('/search/', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [videos, searchVideos]
};

export default useVideos;