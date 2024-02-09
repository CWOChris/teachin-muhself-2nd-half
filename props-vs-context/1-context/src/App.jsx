import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import CountProvider from './utils/CountContext';

function App() {
  const [count, setCount] = useState(0)

  return (
   <CountProvider>
      <Home count={count} setCount={setCount}/>
      </CountProvider>
  )
}

export default App
