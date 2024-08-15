import React, { useCallback } from 'react';
import Input from '../components/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { logIn } from '../utilities';
import { useOutletContext } from "react-router-dom";

function LogIn() {
    const [username, setUsername] = useState('')
    const { setUser } = useOutletContext();
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [variant, setVariant] = useState('login')


    const handleClick=()=>{
      navigate('/')
    }

    const handleSignIn=()=>{
      navigate('/profile')
    }

    const handleSubmit = async(e)=> {
      e.preventDefault();
      setUser(await logIn(username, password))
    }


  return (
    <form onSubmit={handleSubmit}
      className='w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed'
      style={{
        backgroundImage: `url('/src/assets/background_netflix.jpg')` 
      }}
    >
      <div className='w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/src/assets/netflix.png' alt="Netflix" className='h-10 pl-40' />
          <button className='absolute top-0 right-40 bg-red-600  text-white rounded-md m-8 hover:bg-red-700 transition pl-3 pr-3 pt-1 pb-1 font-semibold'>Sign in</button>
        </nav>
        <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-bold'>
                Sign In
            </h2>
            <div className='flex flex-col gap-4'>
            {/* <input className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-green-600 focus:ring-0 peer'
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                type='text'
                placeholder='Username'
                required
                /> */}
                <input className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-green-600 focus:ring-0 peer'
                value={username}
                placeholder='username'
                onChange={(ev) => setUsername(ev.target.value)}
                id='username'
                type='text'
                required
                />
                <input className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-green-600 focus:ring-0 peer' 
                value={password}
                placeholder='Password'
                onChange={(ev) => setPassword(ev.target.value)}
                id='password'
                type='password'
                required
                />
            </div> 
            <button type='submit' className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                Login
            </button>
            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                  <FcGoogle />
                </div>
            </div>
            <p className='text-neutral-500 mt-12'>
                New to Netflix?
                <span onClick={handleClick} className='text-white ml-1 hover:underline cursor-pointer'>
                    Sign up now.
                </span>
            </p>
            <p className='text-white text-sm pt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </div>
        </div>
      </div>
    </form>
  );
}

export default LogIn;