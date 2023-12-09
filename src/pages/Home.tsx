import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Hero from '../components/hero/Hero'
import Dashboard from '../components/dashboard/Dashboard'

export default function Home() {
  return (
    <div className=' w-full bg-white'>
      <div className='w-full lg:pt-7 pb-24'>
        <Navbar />
      </div>  
      <div className='w-full'>
        <Dashboard />
      </div> 
      <div className=''>
        <Hero />
      </div>   
      <div className='h-[120vh] bg-red-500'>fasd;j</div>
    </div>
  )
}
