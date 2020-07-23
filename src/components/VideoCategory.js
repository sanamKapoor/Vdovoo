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
        data.category.map(data => {
          let videos = JSON.parse(localStorage.getItem(data));
          setAllVideos(prev => [...prev, { type: data, videos: videos }])
        })

        setFetchOnce(false);
      }
    }
    
  }, [data.searchResult, data.category, fetchOnce])

  
  return (
    <div className="container-fluid">
      {
        otherVideos.length > 0 ? 
            <div>
              <h3 className="text-capitalize">Search Results</h3>
              <div className="video-row">
                {
                  otherVideos.map((video) => {
                  if(video.id.videoId){
                    return <SingleVideo data={video} key={video.etag} />
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
