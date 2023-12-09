import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Hero from '../components/hero/Hero'
import Dashboard from '../components/dashboard/Dashboard'

export default function Home() {
  return (
    <div className=' w-full h-[100vh] mx-h-[120vh]'>
      <div className='w-full lg:pt-7 pb-24'>
        <Navbar />
      </div>  
      <div className='w-full max-h-100vh h-[100vh]'>
        <Dashboard />
      </div> 
      <div>
        <Hero />
      </div>   
    </div>
  )
}
