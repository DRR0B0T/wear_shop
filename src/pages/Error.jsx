import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <h1
        className='error__title'
      >You went to a non-existent page 404</h1>
      <div>
        <Link to='/'>
          <button
            className='error__btn'
          >
            Return to Home
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Error
