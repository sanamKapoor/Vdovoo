import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Error() {

  useEffect(() => {
    localStorage.removeItem('user');
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '90vw', margin: 'auto'}}>
      <div style={{ borderRadius: '10px'}} className="bg-light p-3 border-danger text-danger text-center">
        <h1 className="font-weight-bold">Page not Found (Error 404)</h1>
        <Link className="btn btn-secondary btn-sm mt-1 mt-md-2" to="/" >Login</Link>
      </div>
    </div>
  )
}

export default Error
