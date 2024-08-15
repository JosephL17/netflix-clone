import React from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsBell } from 'react-icons/bs'
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { logOut } from '../utilities';

function Navbar() {
    const navigate = useNavigate()
    const {user, setUser} = useOutletContext()
   
    const handleClickHome=(e)=>{
        navigate('/home')
        console.log('hello')
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
    const handleClickLogOut = async()=> {
        setUser(await logOut())
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
                <NavbarItem clickFunc={handleClickHome} label='Home'/>
                <NavbarItem clickFunc={handleClickTVShows} label='TV Shows'/>
                <NavbarItem clickFunc={handleClickMovies}label='Movies'/>
                <NavbarItem clickFunc={handleClickPopular}label='New & Popular'/>
                <NavbarItem label='My List'/>
                <NavbarItem label='Browse by languages'/>
            </div>
            <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className='text-white transition'/>
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
              <div className='text-gray-200 hover:text-gray-300  cursor-pointer transition'>
              <IoSearch size={30}/>
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