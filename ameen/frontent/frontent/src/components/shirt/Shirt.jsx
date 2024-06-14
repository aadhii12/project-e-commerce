import React from 'react'
import Shirtcard from './Shirtcard'
import { ShirtData } from './shirtData'
import './Shirtcard.css'
import { Link } from 'react-router-dom'
import Home from '../home/Home'

const Shirt = () => {
  return (
    <div>
        <Home/>
    <div className="flex flex-wrap justify-center bg-white py-5">
        
    {ShirtData.map((item) =><Link to={'/product'}><Shirtcard product={item}/></Link>)}
    
</div>
</div>
  )
}

export default Shirt