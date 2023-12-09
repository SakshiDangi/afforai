import React from 'react'
import Service from '../ui/service';
import { BiCheck } from 'react-icons/bi';
import './animate.css'

export default function ServiceCard() {
    const services = [
        { name: 'Summarize Key Findings', icon: <BiCheck /> },
        { name: 'Compare Between Documents', icon: <BiCheck /> },
        { name: 'Search For Answers', icon: <BiCheck /> },
        { name: 'Ask in Any Language', icon: <BiCheck /> },
      ];
  return (
    <div className="flex flex-row justify-center items-center pt-4 gap-4 max-w-[100%] animate-slide">
      {services.map((service, index) => (
        <Service key={index} serviceName={service.name} icon={service.icon} />
      ))}    
    </div>
  )
}
