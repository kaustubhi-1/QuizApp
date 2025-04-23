import React from 'react'
import { PiGreaterThanThin } from "react-icons/pi"

const data = [
  {
    name:"TEACHERS",
    cta: "Sign up for free",
    color:"bg-purple-600",
    text:"text-white"
  },
  {
    name:"ADMINS",
    cta: "Learn more",
    color:"bg-purple-100",
    text:"text-purple-600"
  },
]

const Buttons = () => {
  return (
    <div className='w-full flex flex-col items-center pt-5 gap-[20rem] justify-between'>
        <div className='flex gap-2'>
          {data.map((item,index)=>{
            return <a className={`text-left text-md rounded-lg px-4 py-2 ${item.color} href=""`}>
                <p className={`${item.text} text-[0.9rem]`}>{item.name}</p>
                <div className='flex justify-between gap-4 items-center'>
                  <p className={`font-semibold ${item.text}`}>{item.cta}</p>
                  <PiGreaterThanThin className=' font-extrabold' />
                </div>
              </a>
          })}
              
              
            </div>
    </div>
  )
}

export default Buttons