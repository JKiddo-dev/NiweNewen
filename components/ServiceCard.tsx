import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 group'>
      <div className='w-48 h-48 relative mb-4'>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' className='rounded-full' />
      </div>
      <h2 className='text-2xl text-[#002315] font-bold mb-2 '>{title}</h2>
      <p className='text-[#78288c] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        {description}
      </p>
    </div>
  )
}
