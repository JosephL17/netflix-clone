import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import axios from 'axios'
import { api } from '../utilities';
import { FaPlay } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';

function Layout() {
  const {username, setUsername} = useOutletContext()
  const [movies, setMovies]= useState([])
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]
 
  
  const getMovies = async() => {
    let response = await api.get('movies/fetch-data/')
    setMovies(response.data.results)
  }

  useEffect(()=> {
    getMovies()
  }, [])


  return (
    <>
    <Navbar setUsername={setUsername}/>
    <div className=' w-full h-[950px] object-scale-down'>
      <div className='w-full h-full'>
      {/* Main background image with gradient */}
      <div className='absolute w-full h-[550px]'>
      {movies[0]?.poster_path && (
        <img className='object-cover'
          src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
          alt="Main backdrop"
        />
      )} 
      <div className='absolute w-full top-[90%] p-4 md:p-8'>
        <h1 className='text-3xl md:5xl font-bold text-gray-300'>{randomMovie?.title ? randomMovie?.title : randomMovie?.name}</h1>
        <span className='text-sm text-white max-w-20'>{randomMovie?.overview}</span>
        <div className='my-2'>
      <button  className='border bg-white text-black py-4 px-8 rounded-md '> 
      <p className='flex font-semibold text-xl'> 
        <FaPlay size={20} className='mr-2'/> 
        Play
      </p>
       </button>
      <button className='border bg-gray-500 text-white py-4 px-7 ml-4 rounded-md'>More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Layout