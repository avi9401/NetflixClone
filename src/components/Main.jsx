import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import { BsFillPlayFill } from 'react-icons/bs'

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular)
        .then((response) => {
            setMovies(response.data.results)
        })

    }, [])

    const truncateText = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }

  return (
    <div className='w-full h-[570px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[570px] bg-gradient-to-r from-[#0d0d0d]/90'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movies?.title} /> 
        <div className='absolute w-full top-[30%] p-4 ml-5 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4  flex'>
                <button className='border flex gap-1 rounded items-center justify-center  bg-gray-300 text-black border-gray-300 py-2 pl-4 pr-5'><BsFillPlayFill size={25} /><span className='pb-0.5'>Play</span></button>
                <button className='border rounded text-white border-gray-300 py-2 px-5 ml-4'>watchlater</button>
            </div>
            <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateText(movie?.overview, 200)}</p>

        
        </div> 
      </div>
    </div>
  )
}

export default Main