import React, { useState } from 'react'
import './Navbar.css'
import { Button } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import logo from '../components/assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState("Shirt")
  return (
    <div>
    <div className='navbar'>
      <div className="navlogo">
        <img src={logo} alt="" />
        <p>RETRO FIFTY</p>
      </div>
      <ul className="navmenu">
        <li onClick={()=>{setMenu("Shirt")}}><Link to={'/s'}>Shirts</Link>{menu==="Shirt"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Pant")}}> <Link to={'/p'}>Pants</Link> {menu==="Pant"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-logo-cart">
       <Link to={'/login'}><Button>login</Button></Link>
        <Link to={'/create'}><Button>create account</Button></Link>
        <Link to={'/cart'}><ShoppingCartIcon className="w-10 h-10"/></Link>
       </div>
      

    </div>
    
    
    </div>
  )
}

export default Navbar