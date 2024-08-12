import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import axios from 'axios'
import Layout from '../components/Layout';
import Row from '../components/Row';


function HomePage() {

//   const [movies, setMovies]= useState([])
//   const randomMovie = movies[Math.floor(Math.random() * movies.length)]
  

//   // const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
//   const url = 'http://127.0.0.1:8000/api/v1/movies/fetch-data/'
//   const options = {
//     method: 'GET',

//     // headers not needed when making call to django
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg1NWY0NDA3YmUzYmY0Y2IxM2M4ZTNjYTFiZmI5YyIsIm5iZiI6MTcyMzMyOTM5MS41MzU0NCwic3ViIjoiNjZiNjU2YmQ3OTJmNmJjMjMzYTc2NWE3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lc-tqw5fAx6HpzcXe4bgIbRfokrq8agd_rQImhnpigY'
//     }
//   };

//   const getMovies = async () => { 
//   fetch(url)
//     .then(res => res.json())
//     .then(json => setMovies(json.results))
//     .catch(err => console.error('error:' + err));
  
//   }

//   useEffect(()=> {
//     getMovies()
//   }, [])

// console.log(movies)
// console.log(randomMovie?.title)
// // const { title, backdrop_path, overview } = movies
// // console.log(title)
const url = 'http://127.0.0.1:8000/api/v1/movies/fetch-data/'

return (
    <>
      <Layout/>
      <Row rowID='1' title = 'Popular' getURL={url}/>
      <Row rowID='2' title = 'Trending' getURL={url}/>
      <Row rowID='3' title = 'Top Rated' getURL={url}/>
      <Row rowID='4' title = 'Playing Now' getURL={url}/>
      <Row rowID='5' title = 'Action' getURL={url}/>
    </>
  )
}

export default HomePage