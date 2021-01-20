import React, { useEffect } from 'react';
import Header from './Header';
import { useLocation, useHistory } from 'react-router-dom';
import Videos from './Videos';

function Home() {

  const { state } = useLocation(); 
  let history = useHistory();

  useEffect(() => {
    if(state){
      let userData = {
        email: state.user.email,
        password: state.user.password
      }
      sessionStorage.setItem('user', JSON.stringify(userData))
    }
  }, [state])

  

  if(state || JSON.parse(sessionStorage.getItem('user'))){
    return (
      <>
      <Header search={true} />
      <Videos />  
      <div className="py-1 py-md-2 text-center text-sm-right watermark mt-5"> 
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
