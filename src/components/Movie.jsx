import React, {  useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'

const Movie = ({items}) => {


  const [like, setLike] = useState(false)
  const [saved, setsaved] = useState(false)
  const {user} = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}` )

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      setsaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: items.id,
          title: items.title,
          img: items.backdrop_path
        })
      })
    } else {
      alert('Please log in to save movie')
    }
  }



  {/* 
  
  --remove comment to splice titles under each element in the row --
  
  const truncateText = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }

  */}




  return (
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 duration-1000 hover:scale-105'>
              <img className='w-full rounded h-auto block' src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} alt={items?.title} />
                <div className='absolute top-0 left-0 w-[97%] h-full hover:bg-[#0d0d0d]/60 opacity-0 hover:opacity-100 text-white font-semibold'> 
                    <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full text-center '>{items?.title}</p>
                    <p onClick={saveShow}>
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart  className='absolute top-4 left-4 text-gray-300'/>}
                    </p>
                </div>
                
                {/* --remove the comment to show titles beneath each element in the row-- 

                <p className='text-white items-center justify-center'>{truncateText(items?.title, 30)}</p> */}

            </div>
  )
}

export default Movie