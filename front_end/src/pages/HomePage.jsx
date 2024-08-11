import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import axios from 'axios'

function HomePage() {

  const [movies, setMovies]= useState([])
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]
  

  // const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
  const url = 'http://127.0.0.1:8000/api/v1/movies/fetch-data/'
  const options = {
    method: 'GET',

    // headers not needed when making call to django
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg1NWY0NDA3YmUzYmY0Y2IxM2M4ZTNjYTFiZmI5YyIsIm5iZiI6MTcyMzMyOTM5MS41MzU0NCwic3ViIjoiNjZiNjU2YmQ3OTJmNmJjMjMzYTc2NWE3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lc-tqw5fAx6HpzcXe4bgIbRfokrq8agd_rQImhnpigY'
    }
  };

  const getMovies = async () => { 
  fetch(url)
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(err => console.error('error:' + err));
  
  }

  useEffect(()=> {
    getMovies()
  }, [])

console.log(movies)
console.log(randomMovie?.title)
// const { title, backdrop_path, overview } = movies
// console.log(title)


return (
  <>
    <Navbar />
    <div className='relative w-full h-[850px]'>
      <div className='w-full h-full'>
      {/* Main background image with gradient */}
      <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'>
      {movies[0]?.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
          alt="Main backdrop"
        />
      )}
      <div className='absolute w-full top-[90%] p-4 md:p-8'>
        <h1 className='text-3xl md:5xl font-bold text-gray-300'>{randomMovie?.title}</h1>
        <span className='text-sm text-white max-w-20'>{randomMovie?.overview}</span>
        <div className='my-2'>
      <button className='border bg-white text-black py-4 px-8 rounded-md'>Play</button>
      <button className='border bg-gray-500 text-white py-4 px-7 ml-4 rounded-md'>More Info</button>
      </div>
      </div>

      </div>
      
      {/* Horizontal scrollable row of images */}
      {/* <div className='absolute bottom-0 w-full overflow-x-auto whitespace-nowrap flex space-x-4 p-4'>
        {movies.map((movie) => (
          <div key={movie.id} className='flex-shrink-0 text-white'>
            <img
              className='w-40 h-30 object-cover'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title || 'Movie Poster'}
            />
          </div>
        ))}
      </div> */}
      </div>
    </div>
  </>
);
}

export default HomePage