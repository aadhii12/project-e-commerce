import React from 'react'
import { Link } from 'react-router-dom'

const Pantcard = ({product}) => {
  return (
    
    <div className="productcard w-[15rem] m-3 transition-all cursor-pointer">
        <br></br><br></br><br></br>
    <div className="h-[20rem]">
     <Link to={'/product'}><img className="h-full w-full object-cover object-left-top" src={product.imageUrl}alt=""/></Link> 
    </div>
    <div className="textpart bg-white p-3">
      <div>
        <p className="font-bold opacity-60">
          {product.title}
        </p>
        <p>
          {product.brand}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">{product.discountedPrice}</p>
        <p className="line-through opacity-50">{product.price}</p>
        
      </div>
    </div>

  </div> 
  )
}

export default Pantcard