'use client';

import React from 'react';
import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProductCardCarouselProps {
  images: string[];
  isHovered: boolean;
}

const PrevArrow = (props: CustomArrowProps) => (
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer" onClick={props.onClick}>
    <BsChevronLeft className="text-white text-2xl" />
  </div>
);

const NextArrow = (props: CustomArrowProps) => (
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer" onClick={props.onClick}>
    <BsChevronRight className="text-white text-2xl" />
  </div>
);

const ProductCardCarousel = ({ images, isHovered }: ProductCardCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isHovered,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-48">
            <Image src={src} alt={`Image ${index}`} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCardCarousel;
