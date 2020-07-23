import React, { useState, useEffect } from 'react'
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
  
  useEffect(() => {
    getVideos([]);
    setError(error)

    fetchVideos(JSON.parse(localStorage.getItem('users')))
  }, [ query, error ])

  const fetchVideos = (storedUsers) => {
    let sameUser;

    let currentUser = JSON.parse(sessionStorage.getItem('user'))

    if(currentUser){
      if(storedUsers.length > 0){
        storedUsers.filter(user => {
          if(user.email === currentUser.email && user.password === currentUser.password){
            sameUser = user;
          }
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
  }

  const getVideoType = (videoType) => {
    if(videoType.length > 0){
      videoType.map(video => {
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
            if(err){
              setError('Something went wrong on server end !');
            }
          })
      })
    } else {
      setError('No video found');
    }
  }
  
  return (
    <>
     <Header search={false} />
    <div className="container-fluid">
     <div>
      <h3 className="text-capitalize">{type}</h3>
      {
        videos.length > 0
        ?
        <div className="video-row">
          {  
            videos.map(video => {
              return <SingleVideo data={video} key={video.etag} />
            })
          }
        </div>  
        :
        error ?
        <h4 className="text-center">{error}</h4>
        :
        <div className="text-center">
        <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
         </div>
        </div>
      }
     </div>
     </div>
    </>
  )
}

export default ProfileData
