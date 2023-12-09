import React from 'react'
import landing from '../../images/laptop-landing-3.png'

export default function Hero() {
  return (
    <div
      style={{backgroundImage: `url(${landing})`}} 
      className='flex items-center justify-center  bg-[image:var(backgroundImage)] bg-no-repeat bg-center w-full h-[100vh]'>
       
    </div>
  )
}
