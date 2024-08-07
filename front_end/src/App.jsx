import { useState } from 'react'; 
import LogIn from './pages/LogIn';

function App() {
  const [count, setCount] = useState(0);

  return (
    <LogIn/>
  );
}

export default App;
