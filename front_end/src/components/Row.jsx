import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { LuPlusCircle } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { api } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import { confirmUser } from '../utilities';
import YouTube from 'react-youtube';


function Row({title, getURL, rowID, clickFunc}) {
    const { user } = useOutletContext()
    const [movie, setMovie] = useState([])
    const [like, setLike] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [userID, setUserID] = useState('')
    const [key, setKey] = useState('')


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

      const getTrailers = async(id) => {
        let response = await api.get('/movies/trailers/', {
          'id': id
        })
        setKey(response.data.results[0].key)
      }
      

    useEffect(() => {
        axios.get(getURL).then((response) => {
            setMovie(response.data.results)
        },
    )
    getTrailers()
    },[getURL])
    
    useEffect(()=> {
      const getID = async() => {
      let Token = localStorage.getItem('token')
      api.defaults.headers.common['Authorization'] = `Token ${Token}`
      let response = await api.get('users/')
      setUserID(response.data.id)
      }
      getID()
    },[])

    const addFavorite = async(movie) => {
      let response = await api.post('Favorites/', {
        "user" : userID,
        "title" : movie.title,
        "name" : movie.name,
        "genre" : movie.genre,
        "description" : movie.description,
        "overview" : movie.overview,
        "backdrop_path" : movie.backdrop_path,
      })
      setFavorite(true)
    }


    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    // TODO 
    // figure out how to use youtube react component 
    // <YouTube videoId={key} />
    
  return (
    <>
        <h2 className='text-white font-bold md:text-2xl p-2 relative z-10'>{title}</h2>
        <div className='relative flex items-center group'>
            <FaChevronLeft 
                onClick={slideLeft}
            size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth relative'>
                {movie.map((item) => (
                   <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px]  ml-4 inline-flex cursor-pointer relative p-2 transition-transform transform hover:scale-[1.3] hover:z-10 '>
                        <img onClick={handlePlay} className='w-auto h-auto block bg-gradient-to-b from-black' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}  alt={item.title ? item.title : item.name} /> 
                        <div className='absolute top-0 left-0 h-full w-full  opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-md md:text-md font-bold flex justify-center items-center h-full text-center'>{item.title ? item.title : item.name}</p>
                            <p>
                            {favorite ? <FaCirclePlus className='absolute top-4 left-12 text-gray-300 hover:scale-110'/> : <LuPlusCircle onClick={()=>addFavorite(item)} className='absolute top-4 left-12 text-gray-300 hover:scale-110'/> }
                            </p>
                            <p>
                               {like ? <BsHandThumbsUpFill className='absolute top-2 left-6 text-gray-300 hover:scale-105'/> : <BsHandThumbsUp className='absolute top-4 left-4 text-gray-300 hover:scale-105'/> } 
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