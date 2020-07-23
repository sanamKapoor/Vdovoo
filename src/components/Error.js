import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Error() {

  useEffect(() => {
    sessionStorage.removeItem('user');
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
      <div style={{ borderRadius: '10px'}} className="bg-light p-3 border-danger text-danger text-center">
        <h2 className="font-weight-bold">Page not Found (Error 404)</h2>
        <Link className="btn btn-secondary mt-2" to="/" >Login</Link>
      </div>
    </div>
  )
}

export default Error
