import React from 'react'
import Header from '../Header/Header'
import Notecard from '../Notecard/Notecard'

const Home = () => {
  return (
    <div>
        <Header/>

        <div className='container mx-auto mt-6'>
            <Notecard
             title="meet on 7pm"
             date="4th apr 2025"
             content="loremipsum"
             tags="#meet"
             ispinned={true}
             onEdit={()=>{}}
             onDelete={()=>{}}
             onPinNote={()=>{}} />
        </div>
    </div>
  )
}

export default Home