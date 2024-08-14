import React, { useCallback } from 'react';
// import Input from '../components/input';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import { userRegistration } from '../utilities';
import { useOutletContext } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useOutletContext();
    const navigate = useNavigate()


    const handleClick = () => {
        navigate('/login')
    }
    
    const handleSubmit = async(e)=> {
      e.preventDefault();
      setUsername(await userRegistration(email, username, password))
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
          <button className='absolute top-0 right-40 bg-red-600  text-white rounded-md m-8 hover:bg-red-700 transition pl-3 pr-3 pt-1 pb-1 font-semibold'
          onClick={handleClick}
          >Sign in</button>
        </nav>
        <div className='flex justify-center'>
            <div className=' self-center mt-2 lg:w-2/5 lg:max-w-xl rounded-md w-full'>
            <h2 className='text-white text-6xl mb-8 font-bold'>
                Unlimited movies, TV shows, and more
            </h2>
            <h3 className='text-white text-2xl font-semibold m-4'>
                Watch anywhere. Cancel anytime.
            </h3>
            <h3 className='text-white text 2xl font-semibold m-4'>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='flex flex-col gap-4'>
            <input className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-green-600 focus:ring-0 peer'
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                type='text'
                placeholder='Username'
                required
                />
                <input className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-green-600 focus:ring-0 peer'
                value={email}
                placeholder='Email'
                onChange={(ev) => setEmail(ev.target.value)}
                id='email'
                type='email'
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
            {/* add type=submit to bottom to properly handle onsubmit event of form */}
            <button type='submit' className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                Get started
            </button>
            </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;