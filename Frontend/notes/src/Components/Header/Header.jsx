import React from 'react'
import Profile from '../Profileinfo/Profile'

const Header = ({userinfo}) => {
  return (
    <div className='kk flex drop-shadow justify-between items-center  px-6 py-3'>
        <h2 className='pp text-lg'> <button>Notes</button> </h2>
        <Profile userinfo = {userinfo} />
    </div>
  )
}

export default Header