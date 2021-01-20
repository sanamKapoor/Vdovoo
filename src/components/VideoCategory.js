import React, { useEffect, useContext, useState } from 'react';
import { MyContext } from '../Context';
import SingleVideo from './SingleVideo';
import ShowDefault from './ShowDefault';

function VideoCategory() {

  const { data } = useContext(MyContext);
  const [allVideos, setAllVideos] = useState([]);
  const [otherVideos, setOtherVideos] = useState([]);
  const [fetchOnce, setFetchOnce] = useState(true);

  useEffect(() => {
    if(data.searchResult.length > 0){
      setOtherVideos(data.searchResult);
    } 
    else {
      if(fetchOnce){
          for(let d of data.category){
              let videos = JSON.parse(localStorage.getItem(d));
              setAllVideos(prev => [...prev, { type: d, videos: videos }])
            }
          }

        setFetchOnce(false);
      }
    
  }, [data, fetchOnce])

  return (
    <div className="container-fluid">
      {
        otherVideos.length > 0 ? 
            <div>
              <h1 className="text-capitalize">Search Results</h1>
              <div className="video-row my-2 my-md-3">
                {
                  otherVideos.map((video) => {
                  if(video.id.videoId){
                    return <SingleVideo data={video} key={video.etag} />
                  } else {
                    return null;
                  }
                  })
                }
              </div>
            </div>
            :
            allVideos.length > 0
            ?
            <ShowDefault allVideos={allVideos} />
            :
            '' 
      }

    </div>
  )
}

export default VideoCategory
