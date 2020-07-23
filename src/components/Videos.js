import React, { useContext, useState } from 'react';
import { MyContext } from '../Context';
import  axios from 'axios';
import VideoCategory from './VideoCategory';

function Videos() {
  const { data, dispatch } = useContext(MyContext);
  const [haveVideos, isHavingVideos] = useState(false);

  const fetchVideo = (item) => {
     
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: "snippet",
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: item,
        }
      })
        .then(res => {
          if(localStorage.getItem(item)){
            let data = JSON.parse(localStorage.getItem(item));
            data = res.data.items
            localStorage.setItem(item, JSON.stringify(data));
          } else {
            let data = [];
            data = res.data.items;
            localStorage.setItem(item, JSON.stringify(data));
          }
          dispatch({ type: 'ERROR', payload: ''})
        })
        .catch(err => {
          if(err && !localStorage.getItem(item)){
            dispatch({ type: 'ERROR', payload: 'Something went wrong!'})
          }
        })
  }

  React.useEffect(() => {
      data.category.map(item => {
        fetchVideo(item)
      })
      setTimeout(() => isHavingVideos(true), 2000);
  }, [haveVideos])

  
  if(data.error){
    return(
      <div className="text-center mt-3">
        <h2>{data.error}</h2>
        <p className="text-muted lead">Try again with reloading the page.</p>
      </div>
    )
  } else if(!haveVideos) {
    return (
      <div className="text-center mt-3">
       <p className="lead">Please wait...</p>
      </div>
      )
  } else {
    return (
      <div>
        <VideoCategory />
      </div>
      )
  }

  }
   
export default Videos
