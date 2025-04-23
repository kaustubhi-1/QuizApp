import React from 'react'
import Buttons from './Buttons'

const CTASection = () => {
  return (
    <div className='w-full mt-20 px-[16rem] '>
      <div className='max-w-screen-xl mx-auto text-center rounded-3xl pt-[4rem]  bg-purple-300 h-[20rem]'>
          <h1 className='text-4xl font-semibold mb-3'>Start adapting your curriculum in minutes.</h1>
          <p className='text-lg '>The best way to create, adapt, and deliver resources differentiated for every student.</p>
            <Buttons />
      </div>
    </div>
  )
}

export default CTASection