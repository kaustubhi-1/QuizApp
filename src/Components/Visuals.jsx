import React from 'react'
import line1 from '../assets/Images/line1.svg';

const data = [
  {
    number:"01",
    text: "Adapt anything in your curriculum with an assist from AI when you want it.",
    video: "https://cf.quizizz.com/videos/webflow/Adapt_Updated_V2.mp4",
    color: "text-[#69A3D9]",
    border: "border-blue-600"
  },
  {
    number:"02",
    text: "Deliver differentiated instruction that’s as unique as your students.",
    video: "https://cf.quizizz.com/videos/webflow/Intro_1K_Updated.mp4",
    color: "text-[#90D6DD]",
    border: "border-blue-400"
  },
  {
    number:"03",
    text: "Get results. Witness joy. Repeat.",
    video: "https://cf.quizizz.com/videos/webflow/Joy_Updated_V2.mp4",
    color: "text-[#FED28F]",
    border: "border-orange-400"
  }
]
const Visuals = () => {
  return (
    <div className='w-full '>
      <div className='max-w-screen-xl mx-auto py-20 '>
        {data.map((item,index)=>{
          return <div key={index} className={`flex ${index % 2 === 1 ? 'flex-row-reverse':'flex-row'} items-center gap-8 mt-[8rem] `}>

        <div className="left w-[50%] ml-[4rem]">
          <p className={`text-[7rem] ${item.color} font-extrabold`}>{item.number}</p>
          <p className='text-zinc-700 font-semibold text-[2rem] w-[70%] '>{item.text}</p>
        </div>
        <div className="right w-[50%] ">
          <div className={`w-full overflow-hidden border-10 ${item.border} rounded-[25px]`}>
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
          </video>

          </div>
        </div>

          </div>
        })}
        
      </div>
    </div>
  )
}

export default Visuals