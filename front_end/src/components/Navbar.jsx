import React from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsBell } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import AccountMenu from './AccountMenu';

function Navbar() {
    const navigate = useNavigate()
   
    const handleClickHome=()=>{
        navigate('/home')
    }
    const handleClickTVShows=()=>{
        navigate('/tvshows')
    }
    const handleClickMovies=()=>{
        navigate('/movies')
    }
    const handleClickPopular=()=>{
        navigate('/Popular')
    }
    const handleClickMylist=()=>{
        navigate('/MyList')
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
         bg-opacity-90'
         >
        <img className='h-4 lg:h-7' src="/src/assets/netflix.png" alt="" />
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem label='Home'/>
                <NavbarItem label='TV Shows'/>
                <NavbarItem label='Movies'/>
                <NavbarItem label='New & Popular'/>
                <NavbarItem label='My List'/>
                <NavbarItem label='Browse by languages'/>
            </div>
            <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className='text-white transition'/>
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
              <div className='text-gray-200 hover:text-gray-300  cursor-pointer transition'>
              <IoSearch />
                </div>  
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
              <BsBell />
                </div> 
                <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <img src="/src/assets/netflix-profile-image.jpg" alt="" />
                    </div>
                    <BsChevronDown className='text-white transition'/>
                    <AccountMenu />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar