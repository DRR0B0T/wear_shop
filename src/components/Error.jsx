import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div className='container error-page'>
      <h1 className='red-text  text-accent-4'>You have reached a secure page 404</h1>
      <Link to='/'>
        <button
          className='waves-effect waves-light btn blue '
        >
          Return to Home
        </button>
      </Link>
    </div>

  );
};

export default Error;
