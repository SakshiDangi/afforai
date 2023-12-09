import React from 'react'
import AppSumo from './AppSumo'

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <AppSumo />
      <div >
      <h2 className='max-w-[600px] pt-5 text-center font-semibold text-black-300 text-[65px] leading-snug align-center'>
        Your second brain for maximizing productivity
      </h2>
      <p className='max-w-[600px] pt-5 text-center font-bold align-center'>
      Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
      </p>
      </div>
    </div>
  )
}
