import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import { confirmUser } from '../utilities';

function ProfilePage() {
    // const [username, setUsername] = useState('')
    const { user } = useOutletContext();
    console.log(user)

    const navigate = useNavigate()

    const navigateToHome=()=> {
        navigate('/home')
    }
  return (
    <div className='flex items-center h-full justify-center'>
        <div className='flex flex-col'>
            <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
                <div className='flex items-center justify-center gap-8 mt-10'>
                    <div onClick={navigateToHome}>
                    <div className='group flex-row w-44 mx-auto text-white text-xl text-center'>
                        <div className='w-40 h-40 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                            <img src="/src/assets/netflix-profile-image.jpg" alt="Profile" />
                        </div>
                                <h3>{user}</h3>
                            <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white' > 
                            </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ProfilePage