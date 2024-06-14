import { Button } from '@headlessui/react'
import React from 'react'


const Cartitems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h[9rem]">
          <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/kxrvi4w0/shirt/v/k/d/38-pesfoslb493283-peter-england-original-imaga5p5shuyv6u5.jpeg?q=70" alt="" />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Fit Solid Spread Collar Formal Shirt</p>
          <p className="opacity-70">size:L,white</p>
          <p className="opacity-70 mt-2">seller: christalio2fashion</p>
          <div>
            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
              <p className="font-semibold">$199</p>
              <p className="opacity-50 line-through">$211</p>
              <p className="text-green-600 font-semibold">6%offer</p>
              <Button type="submit" className={"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}>BUY</Button>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Cartitems