import React, { useContext, useState } from 'react';
import { MyContext } from '../Context';
import Modal from './Modal';

function SingleVideo({data}) {

  const { dispatch } = useContext(MyContext);
  const [showModal, isShowModal] = useState(true);

  const handleVideo = (id) => {
    isShowModal(true);
    dispatch({ type: 'PLAY_VIDEO', payload: id})
  }

  return (
    <>
    <div className="card p-0 bg-secondary my-1 my-sm-2 my-md-3" >
        <img 
          onClick={() => handleVideo(data.id.videoId)} 
          src={data.snippet.thumbnails.high.url} 
          alt="" 
          data-toggle="modal" data-target=".exampleModalCenter"
          className="card-img" />
        <div className="card-title px-2 pt-2 text-truncate">
          {data.snippet.title}
        </div>
    </div>

    { showModal ? <Modal /> : ''}
    </>
  )
}

export default SingleVideo
