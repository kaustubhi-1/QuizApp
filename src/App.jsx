import { useState } from 'react'

import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Awards from './Components/Awards'
import Demo from './Components/Demo'
import Testimonials from './Components/Testimonials'
import Visuals from './Components/Visuals'

import CTASection from './Components/CTASection'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <div className='h-screen w-full bg-white'>
        <Navbar />
        <Hero />
        <Awards />
        <Demo />
        <Visuals />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}

export default App
