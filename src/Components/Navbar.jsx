import React from 'react'

const navItems = [
  { name: "Schools & District" },
  { name: "Plans" },
  { name: "Use Cases" },
  { name: "For Business" },
  { name: "Library"},
];

const buttonItems = [
  {name: "Get a quote"},
  {name: "Enter code"},
  {name: "Log in"},
  {name: "Sign up"}
]
const Navbar = () => {
  return (
    <div className=' w-full py-4 px-[4rem]'>
      <div className=' flex justify-between items-center'>
        <div className='left flex justify-center items-center gap-8'>
        <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6792157ffa3e2e9204d4a3b6_%5Bcm%5D%20Brand.svg" alt="" />
        {navItems.map((item,index)=>{
          return <a className='' key={index} href="#">{item.name}</a>
        })}
        </div>
        <div className='right flex gap-5'>
        {buttonItems.map((item,index)=>{
         return item.name === "Sign up" ? <button className=' border-[#48194437] bg-[#8854C0] text-white border-1 px-4 py-2 rounded-lg' >{item.name}</button> : <button className=' border-[#48194437] text-[#5D2057] border-1 px-4 py-2 rounded-lg' >{item.name}</button>
           
        })}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar