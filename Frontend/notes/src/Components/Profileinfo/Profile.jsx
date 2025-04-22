import React from 'react'
import { getInitials } from '../../utils/helper';
import { Link } from "react-router-dom";


const Profile = ({userinfo}) => {
  return (
    <div className=' kk  flex gap-4 items-center '>
        <div className=' lol w-12 h-12 flex items-center rounded-3xl justify-center '> 
            {getInitials(userinfo?.name)}
             </div>
            <div>
                <p className='font-design'>{userinfo?.name} </p>
                <button className='bb text-sm underline ' >
                  <Link to= "/login">
                    Logout
                    </Link>
                </button>
            </div>
    </div>
  )
}

export default Profile ;