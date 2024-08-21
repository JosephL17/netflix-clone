import React from 'react'
import NavbarItem from './NavbarItem'
import { useState } from 'react'
import { BsChevronDown, BsBell } from 'react-icons/bs'
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { logOut } from '../utilities';
import { api } from '../utilities';

function Navbar() {
    const navigate = useNavigate()
    const {user, setUser} = useOutletContext()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
   
    const handleClickHome=(e)=>{
        navigate('/home')
    }
    const handleClickTVShows=(e)=>{
        navigate('/tvshows')
    }
    const handleClickMovies=()=>{
        navigate('/movies')
    }
    const handleClickPopular=()=>{
        navigate('/new&popular')
    }
    const handleClickMylist=()=>{
        navigate('/MyList')
    }
    const handleClickMylikes=()=>{
        navigate('/MyLikes')
    }
    const handleClickLogOut = async()=> {
        setUser(await logOut())
    }

    const askGemini = async() => {
        setLoading(true)

        const response = await api.get('gemini/')
        setData(response.data)
    }

  return (
    <nav className='w-full fixed z-40'>
        <div className='
        px-4 
        md:px-16 
        py-6 
        flex 
        flex-row 
        items-center 
        transition 
        duration-500
        bg-zinc-900 
         bg-opacity-40' >
        <img className='h-4 lg:h-7' src="/src/assets/netflix.png" alt="" />
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem clickFunc={handleClickHome} label='Home'/>
                <NavbarItem clickFunc={handleClickTVShows} label='TV Shows'/>
                <NavbarItem clickFunc={handleClickMovies}label='Movies'/>
                <NavbarItem clickFunc={handleClickPopular}label='New & Popular'/>
                <NavbarItem clickFunc={handleClickMylist} label='My List'/>
                <NavbarItem clickFunc={handleClickMylikes} label='My Likes'/>
                <NavbarItem label='Browse by languages'/>
            </div>
            <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className='text-white transition'/>
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
              <div className='text-gray-200 hover:text-gray-300  cursor-pointer transition'>
              <IoSearch className='transition transform hover:scale-110' size={30} onClick={askGemini} />
                {loading && <p>Loading...</p>}
                {data && <div className='text-white'>{data}</div>}
                </div>  
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
              <BsBell size={20}/>
                </div> 
                <div className='flex flex-row items-center gap-2 cursor-pointer relative text-white'>
                        {user}
                    <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden text-white'>
                        <img src="/src/assets/netflix-profile-image.jpg" alt="" />
                    </div>
                    <BsChevronDown className='text-white transition'/>
                    <button className='border bg-red-600 text-white py-2 px-2 ml-3 rounded-md' onClick={handleClickLogOut}>Logout</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar