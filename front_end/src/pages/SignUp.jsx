import React, { useCallback } from 'react';
import Input from '../components/input';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'

function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'Login' ? 'register' : 'login')
    })

    const handleClick = () => {
        navigate('/login')
    }


  return (
    <div
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
            {/* <Input 
                label='Username'
                onChange={(ev) => setUsername(ev.target.value)}
                id='username'
                value={username}
                /> */}
                <Input 
                label='Email'
                onChange={(ev) => setEmail(ev.target.value)}
                id='email'
                type='email'
                value={email}
                />
                <Input 
                label='Password'
                onChange={(ev) => setPassword(ev.target.value)}
                id='password'
                type='password'
                value={password}
                />
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition' onClick={toggleVariant}>
                Get started
            </button>
            {/* <p className='text-neutral-500 mt-12'>
                New to Netflix?
                <span className='text-white ml-1 hover:underline cursor-pointer'>
                    Sign up now.
                </span>
            </p> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;