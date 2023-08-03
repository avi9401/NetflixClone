import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
   <>
      <div className='text-white w-full'>
      <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
      </div>
      <div className='bg-black/80 fixed top-0 left-0 w-full h-[400px]'>
      <div className='absolute top-[20%] p-4 md:p-8 text-white'>
        <h1 className='text-3xl md:text-5xl font-bold ml-3'>Favourites</h1>
      </div>
      </div>
      <SavedShows />
   </>
  )
}

export default Account