import React, { useContext, useState, useEffect, useCallback } from 'react';
import { MyContext } from '../Context';

function Modal() {

  const { data, dispatch } = useContext(MyContext);
  const [toggleLike, setToggleLike] = useState(false)
  const [toggleDislike, setTogglDislike] = useState(false)
  const [toggleSave, setToggleSave] = useState(false)

  const init = useCallback((currentVideo) => {
    let user = fetchCurrentUser(JSON.parse(localStorage.getItem('users')));
    let likedVideos = user.likeVDO;
    let dislikedVideos = user.dislikeVDO;
    let saveVideos = user.saveVDO;

    if(likedVideos.length > 0){
      likedVideos.map(video => {
        if(video === currentVideo){
          setToggleLike(true)
        } 
        return null;
      })
    }

    if(dislikedVideos.length > 0){
      dislikedVideos.map(video => {
        if(video === currentVideo){
          setTogglDislike(true)
        }
        return null;
      })
    }

    if(saveVideos.length > 0){
      saveVideos.map(video => {
        if(video === currentVideo){
          setToggleSave(true)
        }
        return null;
      })
    }
  }, [])

  useEffect(() => {
    init(data.video);
  }, [data.video, init])

  const onClick = (type) => {
    saveVideo(type)
    switch(type){
      case 'like': 
          setToggleLike(!toggleLike);
          setTogglDislike(false);
          break;
      case 'dislike':
        setTogglDislike(!toggleDislike);
        setToggleLike(false);
        break;
      case 'save':
        setToggleSave(!toggleSave);
        break;
      default :
        console.log(type)
    }
  }

  const appendArr = (videoType, currentVDO, type) => {
  if(type){
    if(videoType.length > 0){
      videoType.filter(video => {
        if(video === currentVDO){
          let index = videoType.indexOf(video);
          videoType.splice(index, 1)
        }
        return null;
      })
    } else {
      videoType.pop(currentVDO)
    }
  } else {
   if(videoType.length > 0){
    let videos = videoType;
    let isThere = false;

      videoType.filter(video => {
        if(video === currentVDO){
          isThere = true;
        }
        return null;
      })

      if(!isThere){
        videos.push(currentVDO);
        videoType = videos;
      }
    } else {
      videoType.push(currentVDO)
    }
    }
  }

  const fetchCurrentUser = (storedUsers) => {
    let sameUser;
    let currentUser = JSON.parse(localStorage.getItem('user'));

    if(storedUsers.length > 0){
      storedUsers.filter(user => {
        if(user.email === currentUser.email && user.password === currentUser.password){
          sameUser = user
        }
        return null;
      })
    }

    return sameUser;
  }

  const saveVideo = type => {
    let storedUsers = JSON.parse(localStorage.getItem('users'));
    let sameUser = fetchCurrentUser(storedUsers);
    let currentVideo;
    
          if(data.video){
      
            currentVideo = data.video;

            if(currentVideo){
            if(type === 'save'){
              appendArr(sameUser.saveVDO, currentVideo, toggleSave)  
            } 
            else if(type === 'like') {
              if(!toggleLike){
                if(sameUser.dislikeVDO.length > 0){
                  sameUser.dislikeVDO.filter(video => {
                    if(video === currentVideo){
                      let index = sameUser.dislikeVDO.indexOf(video);
                      sameUser.dislikeVDO.splice(index, 1)
                    }
                    return null;
                  })
                } 
              }
              appendArr(sameUser.likeVDO, currentVideo, toggleLike)  
            }
            else if(type === 'dislike') {
              if(!toggleDislike){
                if(sameUser.likeVDO.length > 0){
                  sameUser.likeVDO.filter(video => {
                    if(video === currentVideo){
                      let index = sameUser.likeVDO.indexOf(video);
                      sameUser.likeVDO.splice(index, 1)
                    }
                    return null;
                  })
                } 
              }
              appendArr(sameUser.dislikeVDO, currentVideo, toggleDislike)  
            }
            else {
              return;
            }
          }
    }
  
    localStorage.setItem('users', JSON.stringify(storedUsers)); 
  }

 
  const hideModal = e => {
    if(e.target.className === 'modal fade exampleModalCenter'){
      dispatch({ type: 'REMOVE_VIDEO' })
      setToggleSave(false);
      setToggleLike(false);
      setTogglDislike(false)
    }
  }

  return (
  <div onClick={(e) => hideModal(e)} className="modal fade exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div className="modal-content bg-secondary">
      <div className="modal-body p-0">
        <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center">
          {
            (data.loading || data.video === '') ?
            <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
            </div> 
            :
            <iframe title="video" className="embed-responsive-item" src={`https://www.youtube.com/embed/${data.video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>    
          }
         
        </div>       
        </div>

        <div className="m-2">
          {
            data.hide ?
            ''
            :  
          <div className="row">
            <div className="col-6 d-flex">
            <div className="mx-3 d-flex flex-column modal-icon">
              <i 
                onClick={e => onClick('like')} 
                className={`fas fa-thumbs-up fa-1x text-center ${toggleLike ? 'text-primary' : 'text-light' }`}></i>
              <small>Like</small>
            </div>
            <div className="mx-3 d-flex flex-column modal-icon">
              <i 
                onClick={e => onClick('dislike')} 
                className={`fas fa-thumbs-down fa-1x text-center ${toggleDislike ? 'text-primary' : 'text-light' }`}></i>
              <small>Dislike</small>
            </div>
            <div className="mx-3 d-flex flex-column modal-icon">
              <i 
                onClick={e => onClick('save')} 
                className={`fas fa-download fa-1x text-center ${toggleSave ? 'text-primary' : 'text-light'} `}></i>
              <small>Save</small>
            </div>
          </div>
          <div className="col-6"></div>
          </div>

          }
        </div>
    </div>
  </div>
</div>

  )
}

export default Modal
