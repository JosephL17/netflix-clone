import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import axios from 'axios'
import { api } from '../utilities';
import { FaPlay } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';
import YouTube from 'react-youtube';

function Layout() {
  const {username, setUsername} = useOutletContext()
  const [movies, setMovies]= useState([])
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]
 
  
  const getMovies = async() => {
    let response = await api.get('movies/fetch-data/')
    setMovies(response.data.results)
  }

  

  const handlePlay = (imageUrl) => {
    // Open a new window
    //use tailwind modal for canvas to display youtube video 
    //video needs iframe tag?
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    
    // Check if the new window was successfully created
    if (newWindow) {
      // Write HTML content to the new window
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Image</title>
          <style>
            body {
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #000;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              display: block;
            }
          </style>
        </head>
        <body>
          <img src="/src/assets/RickRolled.jpg" alt="Displayed Image">
        </body>
        </html>
      `);
  
      // Close the document writing stream
      newWindow.document.close();
    } else {
      console.error('Failed to open a new window.');
    }
    handlePlay('https://i.kym-cdn.com/photos/images/original/000/377/946/0b9.jpg');
  };
  

  

  useEffect(()=> {
    getMovies()
  }, [])
  
  // let movieID = movies[0].id
  // console.log(movies)
  // https://youtu.be/8ybW48rKBME

  return (
    <>
    <Navbar />
    <div className=' w-full h-[750px] object-scale-down'>
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
      <button onClick={handlePlay} className='border bg-white text-black py-4 px-8 rounded-md '> 
      <p className='flex font-semibold text-xl'> 
        <FaPlay  size={20} className='mr-2'/> 
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