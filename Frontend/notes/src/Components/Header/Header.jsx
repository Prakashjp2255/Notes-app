import React from 'react'
import Profile from '../Profileinfo/Profile'

const Header = () => {
  return (
    <div className='kk flex drop-shadow justify-between items-center  px-6 py-3'>
        <h2 className='pp text-lg'> <button>Notes</button> </h2>
        <Profile/>
    </div>
  )
}

export default Header