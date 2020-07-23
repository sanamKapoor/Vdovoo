import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../Context';

function Modal() {

  const { data, dispatch } = useContext(MyContext);
  const [toggleLike, setToggleLike] = useState(false)
  const [toggleDislike, setTogglDislike] = useState(false)
  const [toggleSave, setToggleSave] = useState(false)

  useEffect(() => {
    init(data.video);
  }, [data.video])

  const init = (currentVideo) => {
    let user = fetchCurrentUser(JSON.parse(localStorage.getItem('users')));
    let likedVideos = user.likeVDO;
    let dislikedVideos = user.dislikeVDO;
    let saveVideos = user.saveVDO;

    if(likedVideos.length > 0){
      likedVideos.map(video => {
        if(video === currentVideo){
          setToggleLike(true)
        }
      })
    }

    if(dislikedVideos.length > 0){
      dislikedVideos.map(video => {
        if(video === currentVideo){
          setTogglDislike(true)
        }
      })
    }

    if(saveVideos.length > 0){
      saveVideos.map(video => {
        if(video === currentVideo){
          setToggleSave(true)
        }
      })
    }
  }

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
    let currentUser = JSON.parse(sessionStorage.getItem('user'));

    if(storedUsers.length > 0){
      storedUsers.filter(user => {
        if(user.email === currentUser.email && user.password === currentUser.password){
          sameUser = user
        }
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

  // const removeVideo = () => {
  //   let storedUsers = JSON.parse(localStorage.getItem('users'));
  //   let sameUser = fetchCurrentUser(storedUsers);

  //   if(data.type === 'like' && sameUser.likeVDO.length > 0){
  //     sameUser.likeVDO.filter(video => {
  //       if(video === data.video){
  //         let index = sameUser.likeVDO.indexOf(video);
  //         sameUser.likeVDO.splice(index, 1)
  //       }
  //     })
  //   } else if(data.type === 'dislike' && sameUser.dislikeVDO.length > 0){
  //     sameUser.dislikeVDO.filter(video => {
  //       if(video === data.video){
  //         let index = sameUser.dislikeVDO.indexOf(video);
  //         sameUser.dislikeVDO.splice(index, 1)
  //       }
  //     })
  //   }
  //   else if(data.type === 'save' && sameUser.saveVDO.length > 0){
  //     sameUser.saveVDO.filter(video => {
  //       if(video === data.video){
  //         let index = sameUser.saveVDO.indexOf(video);
  //         sameUser.saveVDO.splice(index, 1)
  //       }
  //     })
  //   }
  // }

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
            <div className="mx-3 d-flex flex-column">
              <i 
                onClick={e => onClick('like')} 
                className={`fas fa-thumbs-up fa-1x text-center ${toggleLike ? 'text-primary' : 'text-light' }`}></i>
              <span>Like</span>
            </div>
            <div className="mx-3 d-flex flex-column">
              <i 
                onClick={e => onClick('dislike')} 
                className={`fas fa-thumbs-down fa-1x text-center ${toggleDislike ? 'text-primary' : 'text-light' }`}></i>
              <span>Dislike</span>
            </div>
            <div className="mx-3 d-flex flex-column">
              <i 
                onClick={e => onClick('save')} 
                className={`fas fa-download fa-1x text-center ${toggleSave ? 'text-primary' : 'text-light'} `}></i>
              <span>Save</span>
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
