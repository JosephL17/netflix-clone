import { useEffect, useState } from 'react'; 
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Navigate, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { api } from './utilities';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(useLoaderData())
  const navigate = useNavigate()

  useEffect(() => {
    const publicRoutes = ['/', '/login']
    const isPublicRoute = publicRoutes.includes(location.pathname)
    if (!user && !isPublicRoute){
      navigate('/')
    } else if (user && isPublicRoute) {
      navigate('/home')
    }
  },[location.pathname, user])

  return (
    <Outlet context={{ user, setUser}}/>
  );
}

export default App;
