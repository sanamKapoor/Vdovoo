import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context';
import axios from 'axios';

function Header({ search }) {

  const [searchQuery, setSearchQuery] = useState('');
  const { dispatch } = useContext(MyContext);

  const handleSearch = e => {
    if(e.key === 'Enter'){
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: "snippet",
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: searchQuery,
        }
      })
        .then(res => {
          if(res.data.items){
            dispatch({ type: 'SEARCH_VIDEOS', payload: res.data.items })
          }
        })
        .catch(err => dispatch({ type: 'ERROR', payload: 'Something went wrong!' }))

      setSearchQuery('')
    }
  }

  return (
    <nav className="navbar row mx-auto px-3 px-md-5">
      <Link to="/home" className="col-md-3 col-3 navbar-brand font-weight-bold text-light h4 text-left">
        VDOVOO
      </Link>
      {
        search ?
        <input 
        name="searchQuery" 
        value={searchQuery} 
        onChange={e => setSearchQuery(e.target.value)} 
        onKeyPress={e => handleSearch(e)}
        className="col-md-5 col-11 mx-auto mt-3 mt-md-0 order-md-2 order-3 form-control" 
        type="search" placeholder="Search" />
        :
        ''
      }
      
      <div className="col-sm-3 col-7 order-md-3 order-2 align-self-center text-right text-md-center">
      <div className="btn-group">
        <button className="btn btn-outline-light btn-sm dropdown-toggle px-2 px-md-3 py-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="far fa-user fa-1x pr-1"></i>
        </button>
        <div className="dropdown-menu dropdown-menu-right text-center">
          <Link to="/profile/like" className="dropdown-item mx-0" >Liked</Link>
          <Link to="/profile/dislike" className="dropdown-item mx-0" >Disliked</Link>
          <Link to="/profile/save" className="dropdown-item mx-0" >Saved</Link>
          <Link to="/" onClick={() => sessionStorage.removeItem('user')} className="btn btn-secondary btn-sm my-1 mx-2 mx-md-0">Logout</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header
