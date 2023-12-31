import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const{ user, logOut } = UserAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
       await logOut();
       navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex bg-gradient-to-b from-[#0d0d0d]/30 items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/' >
        <h1 className='text-red-600 ml-2 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        {user?.email ? (
          <div className='mr-2'>
            <Link to='/account'>
              <button className='text-white pr-4'>Account</button>
            </Link> 
              <button onClick={handleLogout}className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Logout</button>
           </div> 
        ) : (
          <div className='mr-2'>
            <Link to='/login'>
              <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
            </Link>
          </div>
        )}
    </div>
  )
}

export default Navbar