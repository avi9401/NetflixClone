import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { IconContext } from "react-icons";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = useState([])
    

    useEffect(() => {
       axios.get(fetchURL)
       .then((response) => {
         setMovies(response.data.results)
       })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>

     
     <IconContext.Provider value={{ color: "white", className: "slide" }}>
        <h2 className='text-white flex items-center font-bold md:text-xl p-2 first-of-type:mt-8 md:mt-0 ml-10 '>{title} <MdChevronRight className=' mt-1' /></h2>
        <div className='relative flex items-center group ml-10'>
             <MdChevronLeft 
              onClick={slideLeft}
             className=' slide left-0 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={90} />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((items, id) => (
                <Movie key={id} items={items}/>

                ))}
            </div>
             <MdChevronRight 
              onClick={slideRight} className=' slide right-0 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={90} />
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Row