import { useState } from 'react'
import './App.css'
import CarShopName from './component/CarShopName.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarShopName />
    </>
  )
}

export default App
