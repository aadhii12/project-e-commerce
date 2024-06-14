import React from 'react'
import Pantcard from './Pantcard'
import { PantData } from './pantData'
import './Pantcard.css'
import Home from '../home/Home'
import Navbar from '../../navbar/Navbar'
const Pant = () => {
  return (
    <div>
<Home/>
    <div className="flex flex-wrap justify-center bg-white py-5">
        
    {PantData.map((item) => <Pantcard product={item}/>)}
  </div>
  </div>
  )
}

export default Pant