import React, { useState, useEffect, useCallback } from 'react'
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleVideo from './SingleVideo';
import { useHistory } from 'react-router-dom';

function ProfileData() {

  const { query } = useParams();
  const history = useHistory();

  const [videos, getVideos] = useState([]);
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  
  const fetchVideos = useCallback((storedUsers) => {
    let sameUser;

    let currentUser = JSON.parse(sessionStorage.getItem('user'))

    if(currentUser){
      if(storedUsers.length > 0){
        storedUsers.filter(user => {
          if(user.email === currentUser.email && user.password === currentUser.password){
            sameUser = user;
          } 
          return null;
        })
      }
    } 

    if(sameUser){
      if(query === 'like'){
        setType('Like Videos');
        getVideoType(sameUser.likeVDO)      
      } 
      else if(query === 'dislike') {
        setType('DisLike Videos');
        getVideoType(sameUser.dislikeVDO)
      }
      else if(query === 'save') {
        setType('Save Videos');
        getVideoType(sameUser.saveVDO)
      }
      else {
        return;
      }
    } else {
      history.push('/home');
      return;
    }
  }, [history, query])

  useEffect(() => {
    getVideos([]);
    setError(error)

    fetchVideos(JSON.parse(localStorage.getItem('users')))
  }, [ query, error, fetchVideos ])

  const getVideoType = (videoType) => {
    if(videoType.length > 0){
      for(let video of videoType){
          axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              part: "snippet",
              maxResults: 1,
              key: process.env.REACT_APP_YOUTUBE_API_KEY,
              q: video,
            }
          })
          .then(res=> {
            if(res.data){
              getVideos(prev => [...prev, res.data.items[0] ])
            }
          })
          .catch(err => {
              setError('Something went wrong on server end!');
          })
      }
    } else {
      setError('No video found');
    }
  }
  
  return (
    <>
    <Header search={false} />
    <div className="container-fluid">
     <div className="my-2 my-md-3">
      <h1 className="text-capitalize">{type}</h1>
      {
        videos.length > 0
        ?
        <div className="video-row mt-2 mt-md-2">
          {  
            videos.map(video => {
              return <SingleVideo data={video} key={video.etag} />
            })
          }
        </div>  
        :
        error ?
        <p className="text-center mt-3 mt-md-4 mx-2">{error}</p>
        :
        <div className="text-center mt-3 mt-md-4">
        <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
         </div>
        </div>
      }
     </div>
     </div>
     <div className="py-1 py-md-2 text-center text-sm-right watermark mt-5"> 
          <span className="mx-2">Made with <span aria-label="img" role="img">❤️</span> by Sanam Kapoor</span>
      </div>
    </>
  )
}

export default ProfileData
