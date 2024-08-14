import { useEffect, useState } from 'react'; 
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Outlet } from 'react-router-dom'
import { api } from './utilities';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  const testConnection = async() => {
    let response = await api.get('test/')
    console.log(response.data)
  }

  // useEffect(() => {
  //   testConnection()
  // }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Outlet context={{ user, setUser }}/>
  );
}

export default App;
