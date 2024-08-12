import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { LuPlusCircle } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Row({title, getURL, rowID}) {
    const [movie, setMovie] = useState([])
    const [like, setLike] = useState(false)
    const [favorite, setFavorite] = useState(false)


    useEffect(() => {
        axios.get(getURL).then((response) => {
            setMovie(response.data.results)
        }
    )
    },[getURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-2xl p-2 relative z-10'>{title}</h2>
        <div className='relative flex items-center group'>
            <FaChevronLeft 
                onClick={slideLeft}
            size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth relative'>
                {movie.map((item, id) => (
                   <div className='w-[160px] sm:w-[200px] md:w-[240px] ml-4 inline-flex cursor-pointer relative p-2 transition-transform transform hover:scale-[1.3] hover:z-10'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                        <div className='absolute top-0 left-0 h-full w-full  opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                            <p>
                            {like ? <LuPlusCircle className='absolute top-4 left-12 text-gray-300'/> : <FaCirclePlus className='absolute top-4 left-12 text-gray-300'/> }
                            </p>
                            <p>
                               {like ? <BsHandThumbsUpFill className='absolute top-2 left-6 text-gray-300'/> : <BsHandThumbsUp className='absolute top-4 left-4 text-gray-300'/> } 
                            </p>
                        </div>
                    </div>  
                ))}
            </div>
                <FaChevronRight 
                onClick={slideRight}
                size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </>
  )
}

export default Row