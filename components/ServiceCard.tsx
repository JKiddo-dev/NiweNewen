import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export const ServiceCard = ({title, description, imageSrc}: ServiceCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center'>
      <div className='w-24 h-24 relative mb-4'>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' className='rounded-full' />
      </div>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <p className='text-[#78288c]'>{description}</p>
    </div>
  )
}
