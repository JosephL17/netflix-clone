import { useState } from 'react'; 
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Outlet/>
  );
}

export default App;
