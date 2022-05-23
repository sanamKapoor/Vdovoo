import React, { useEffect } from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import Videos from './Videos';

function Home() {

  let history = useHistory();

  
  if(JSON.parse(localStorage.getItem('vdovoo_user'))){
    return (
      <>
      <Header search={true} />
      <Videos />  
      <div className="py-1 py-md-2 text-center text-sm-right watermark"> 
          <span className="mx-2">Made with <span aria-label="img" role="img">❤️</span> by Sanam Kapoor</span>
      </div>
      </>
    )
  } else {
    history.push('/');
    return ''
  }
  
}

export default Home
