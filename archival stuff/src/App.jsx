import { useState } from 'react'
import CarHeader from './components/CarHeader'
import Cars from './components/Cars'
import Form from './components/Form'
import './App.css'

const cars = [{
  id:1,
  year:1994,
  make:"Mazda",
  model:"Rx-7",
},
{
  id:2,
  year:2000,
  make:"Toyota",
  model:"Celica",
},
{
  id:3,
  year:1996,
  make:"Ford",
  model:"Probe",
},
]
function App() {

  const [carsPurchased, setCarsPurchased] = useState(0);

  const increasePurchase = () => {
    console.log("increasePurchase")
    setCarsPurchased(carsPurchased+1)
  }
  
  return (
    <>
    <CarHeader name="Bob's" location="Minneapolis"/>
    <Cars carsArray={cars} increasePurchase={increasePurchase} />
    {carsPurchased > 0 && ( 
      <div>Cars Purchased: {carsPurchased}</div>
    )}
    <Form/>
    </>
  )
}

export default App
