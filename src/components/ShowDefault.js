import React from 'react';
import SingleVideo from './SingleVideo';

function ShowDefault({ allVideos }) {
  if(allVideos.length > 0) {
    return (
      allVideos.map(data => {
        if(data.videos){
        return(
          <div key={data.type}>
            <h1 className="text-capitalize">{data.type}</h1>
            <div className="video-row">
              {
                data.videos.map((video) => {
                  if(video.id.videoId){
                    return <SingleVideo data={video} key={video.etag} />
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </div>
        )
        } else {
          return null;
        }
    })
    )
  } else {
    return( 
    <div className="text-center mt-4">
    <div className="spinner-border text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
    )
  }
  
}

export default ShowDefault
