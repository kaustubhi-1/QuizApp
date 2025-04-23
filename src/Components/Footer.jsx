import React from 'react'

import facebook from '../assets/Images/facebook.svg';
import insta from '../assets/Images/Instagram.svg';
import pinterest from '../assets/Images/Pinterest.svg';
import twitter from '../assets/Images/twitter.svg';

const sectionOne = ["The Quizizz Blog",
  "Teacher Resources",
  "Certified Educators",
  "State Test Prep",
  "Quizizz for Work",
  "Help Center",
  "Teacher Panel",
  "IQAPS",
  "AI Toolkit",
  "Accessibility and Inclusion",
  "Sitemap",
  "Terms of Service"
]
const sectionTwo =[
 " Worksheets",
"Reseller Program",
"Privacy Policy",
"Privacy Center",
"Careers",
"Contact Support",
"About Us"
]
const logo = [
  {image:facebook},{image:insta},{image:pinterest},{image:twitter}
]

const Footer = () => {
  return (
    <>
    <div className='w-full pb-10 flex  mt-20 text-lg pl-[14rem]'>
      <div className='max-w-screen-xl mx-auto flex  gap-10 w-full'>
      <div className=' w-1/3'>
      <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6792157ffa3e2e9204d4a3b6_%5Bcm%5D%20Brand.svg" alt="" />
      </div>
      <div className=' w-1/3 flex flex-col gap-5 text-left '>
        {sectionOne.map((item,index)=>{
            return <a key={index} href="#">{item}</a>
        })}
      </div>
      <div className=' w-1/3 flex flex-col gap-5 text-left'>
      {sectionTwo.map((item,index)=>{
           return <a key={index} href="#">{item}</a>
        })}</div>
      </div>
      <div>
      </div>

    </div>
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto'>
      <hr className='text-zinc-300' />
      <div className='flex gap-10 justify-end'>
      {logo.map((item,index)=>{
        return <a className=' my-5 ' href='#'>
          <img src={item.image} alt="" />
        </a>
      })}
    </div>
      </div>

    </div>
    
    
    </>
  )
}

export default Footer