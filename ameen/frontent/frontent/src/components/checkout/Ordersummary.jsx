import React from 'react'
import { Button } from '@mui/material'
import Cartitems from '../cart/Cartitems'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>

      </div>

      <div>

<div className='lg:grid grid-cols-3  relative'>
  <div className='col-span-2'>
    {[1,1,1,1,1].map((item)=><Cartitems/>)}
  </div>

  <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
    <div className='border'>
        <p className='uppercase font-bold opacity-60 pb-4 '>Price Details</p>
      <hr/>
      <div className='space-y-3 font-semibold mb-5'>
        <div className='flex justify-between pt-3 text-black'>
          <span>Price</span>
          <span> ₹4695</span>

        </div>
        <div className='flex justify-between pt-3'>
          <span>Discount</span>
          <span className='text-green-600'> -₹3420</span>
          
        </div>

        <div className='flex justify-between pt-3'>
          <span >Delivery Charge</span>
          <span className='text-green-600'> Free</span>
          
        </div>

        <div className='flex justify-between pt-3  font-bold'>
          <span >Total Amount</span>
          <span className='text-green-600'> ₹1275</span>
          
        </div>


      </div>
      <Button variant='contained' className='w-full mt-5' sx={{px:'2.5rem', py:'0.7rem', bgcolor:"purple"}}>Checkout</Button>
    </div>

  </div>


</div>
</div>
    </div>
  )
}

export default OrderSummary