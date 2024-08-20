import React from 'react'
import { useState, useEffect } from "react";
import Layout from '../components/Layout'
import Row from '../components/Row'
import { api } from '../utilities'
import Navbar from '../components/Navbar';
import { FaPlay } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function LikePage() {
    const [favorites, setFavorites] = useState([])
    const [isfavorited, setIsFavorited] = useState(true)
    const [likes, setLikes] = useState(false)
    const [isLiked, setIsLiked] = useState(true)

    const getLikes = async() => {
        let response = await api.get('Favorites/likes/')
        setLikes(response.data)
    }

    useEffect(() => {
        getLikes()

    },[isLiked])

    const deleteLike = async(id) => {
        await api.delete(`Favorites/likes/${id}/`)
        setIsLiked(false)
      }
    
    const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
}

const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
}


  return (
    <>
     <Navbar />
    <div className=' w-full h-[750px]'>
      <div className='w-full h-full'>
      {/* Main background image with gradient */}
      <div className='absolute w-full h-[550px]'>
      {likes[0] && (
        <img className='object-cover w-full bg-gradient-to-r from-black'
          src={`https://image.tmdb.org/t/p/w500/${likes[0].backdrop_path}`}
          alt="Main backdrop"
        />
      )} 
      <div className='absolute w-full top-[90%] p-4 md:p-8'>
        <h1 className='text-3xl md:5xl font-bold text-gray-200'>{likes[0]?.title ? likes[0]?.title : likes[0]?.name}</h1>
        <span className='text-sm text-white max-w-20'>{likes[0]?.overview}</span>
        <div className='my-2'>
      <button  className='border bg-white text-black py-4 px-8 rounded-md '> 
      <p className='flex font-semibold text-xl'> 
        <FaPlay  size={20} className='mr-2'/> 
        Play
      </p>
       </button>
      <button className='border bg-gray-500 text-white py-4 px-7 ml-4 rounded-md'>More Info</button>
      <h2 className='text-white font-bold md:text-2xl p-2 relative z-10'>My List</h2>
        <div className='relative flex items-center group'>
            <FaChevronLeft 
                onClick={slideLeft}
            size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block'/>
            <div id={'slider'} className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth relative'>
              { likes && likes.length > 0 && likes.map((item) => (
                   <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] ml-4 inline-flex cursor-pointer relative p-2 transition-transform transform hover:scale-[1.3] hover:z-10 '>
                        <img  className='w-full h-auto block bg-gradient-to-b from-black' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title ? item.title : likes.name} />
                        <div className='absolute top-0 left-0 h-full w-full  opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-md md:text-md font-bold flex justify-center items-center h-full text-center'>{item.title ? item.title : item.name}</p>
                            <p>
                            {isfavorited ? <FaCirclePlus onClick={()=>deleteFavorite(item.id)}  className='absolute top-4 left-12 text-gray-300 hover:scale-110'/> : <LuPlusCircle onClick={()=>addFavorite(item)} className='absolute top-4 left-12 text-gray-300 hover:scale-110'/> }
                            </p>
                            <p>
                               {isLiked ? <BsHandThumbsUpFill onClick={()=>deleteLike(item.id)}  className='absolute top-2 left-6 text-gray-300 hover:scale-105'/> : <BsHandThumbsUp className='absolute top-4 left-4 text-gray-300 hover:scale-105'/> } 
                            </p>
                        </div>
                    </div>  
                ))
              }
            </div>
                <FaChevronRight 
                onClick={slideRight}
                size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <Row rowID='1' title = 'My List' getURL={url}/> */}
      </>
  )
}

export default LikePage