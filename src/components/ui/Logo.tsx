import React from 'react'
import logo from '../../images/logo.png'

export default function Logo() {
  return (
    <div className='flex items-center justify-between gap-2'>
        <img src={logo} className='w-8'/>
        <h1 className='font-semibold text-[1.2em] text-black-300'>Afforai</h1>
    </div>
  )
}
