"use client";

import React from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProductCardCarouselProps {
  images: string[];
}

const PrevArrow = (props: any) => (
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer" onClick={props.onClick}>
    <BsChevronLeft className="text-white text-2xl" />
  </div>
);

const NextArrow = (props: any) => (
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer" onClick={props.onClick}>
    <BsChevronRight className="text-white text-2xl" />
  </div>
);

const ProductCardCarousel = ({ images }: ProductCardCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[80vh] max-h-[80vh] flex justify-center items-center">
            <img src={src} alt={`Image ${index}`} className="object-contain w-full h-full rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCardCarousel;
