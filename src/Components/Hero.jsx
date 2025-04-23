import React from 'react'
import imageRight from '../assets/Images/AssetRight.svg';
import imageLeft from '../assets/Images/AssetLeft.svg';
import Buttons from './Buttons';


const Hero = () => {
  return (
    <div className='bg-white h-screen w-full '>
      <div className='flex justify-between w-full'>
          <img src={imageLeft} alt="" />
          <div className='pt-[10rem] text-center px-20 flex  flex-col gap-5'>
            <h3 className='text-4xl font-semibold'>Introducing <span className='text-[#AE7DD9]'>Instructional Suite</span></h3>
            <h1 className='text-7xl font-bold'>“I had no idea Quizizz
            could do that.”</h1>
            <p className='text-2xl text-[#666666]'>- Almost everybody</p>
            <hr className='text-[#a9a8a8]' />
            <p className='text-2xl px-26 pt-4 text-center '>Create and deliver bell-to-bell curriculum
            resources that meet the needs of every student.</p>
            
              <Buttons />
        
          </div>
          <img src={imageRight} alt="" />
      </div>
      <div>
            
      </div>
    </div>
  )
}

export default Hero