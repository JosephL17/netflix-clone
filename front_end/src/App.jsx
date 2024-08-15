import { useEffect, useState } from 'react'; 
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Outlet, useLoaderData } from 'react-router-dom'
import { api } from './utilities';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

function App() {
  console.log('apprendered')
  const [user, setUser] = useState(useLoaderData())
  const [username, setUsername] = useState('')

  const testConnection = async() => {
    let response = await api.get('test/')
    console.log(response.data)
  }

  // useEffect(() => {
  //   testConnection()
  // }, [])

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  return (
    <Outlet context={{ user, setUser, username, setUsername }}/>
  );
}

export default App;
