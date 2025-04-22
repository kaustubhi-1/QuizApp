import React from 'react'
import { PiGreaterThanThin } from "react-icons/pi"

const Buttons = () => {
  return (
    <div className='w-full flex flex-col items-center pt-5 gap-[20rem] justify-between'>
        <div className='flex gap-20'>
              <a className='text-left text-lg rounded-lg px-4 py-2   bg-red-400' href="">
                <p className='text-[#ffffff]'>Teacher</p>
                <div className='flex justify-between gap-4 items-center'>
                  <p className='font-semibold text-white'>Sign up for free</p>
                  <PiGreaterThanThin className='text-white font-extrabold' />
                </div>
              </a>
              
            </div>
    </div>
  )
}

export default Buttons