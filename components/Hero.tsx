'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    '/hero.JPG',
    '/hero2.JPG',
    '/hero3.JPG',
    '/hero4.JPG',
    '/hero5.JPG',
    '/hero6.JPG',
    '/hero7.JPG',
    '/hero8.JPG',
    '/hero9.JPG',
    '/hero10.JPG',
    '/hero11.JPG',
    '/hero12.JPG',
    '/hero13.JPG',
    '/hero14.JPG',
    '/hero15.JPG',
    '/hero16.JPG',
    '/hero17.JPG',
    '/hero18.JPG',
    '/hero19.JPG',
    '/hero20.jpg',
  ];

  return (
    <section
    id="hero"
    className="relative flex flex-col justify-center items-center min-w-screen h-[50vh] lg:h-screen bg-[#F3EDDD]"
    style={{ marginTop: '120px' }} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex-1 min-h-[50vh] lg:min-h-[80vh]">
        <Slider {...settings} className="w-full h-full">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[50vh] lg:h-[100vh]">
              <Image
                src={src}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 lg:p-20 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'} bg-black bg-opacity-80`}>
        <h1 className='text-4xl font-bold mb-4 font-sans'>Bienvenido al Domo Niwe Newen</h1>
        <p className='text-xl font-sans'>Relájese y conozca la experiencia de envolverse en la naturaleza</p>
      </div>
    </section>
  );
};

const PrevArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={props.onClick}
  >
    <BsChevronLeft className="text-white text-3xl" />
  </div>
);

const NextArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={props.onClick}
  >
    <BsChevronRight className="text-white text-3xl" />
  </div>
);

export default Hero;
