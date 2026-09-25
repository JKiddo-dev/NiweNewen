"use client";

import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ServiceCardCarouselProps {
  images: string[];
}

const PrevArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 left-2 md:-left-12 transform -translate-y-1/2 z-20 cursor-pointer p-3 rounded-full bg-black/40 hover:bg-black/80 transition-colors backdrop-blur-sm"
    onClick={props.onClick}
  >
    <BsChevronLeft className="text-white text-2xl md:text-3xl" />
  </div>
);

const NextArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-2 md:-right-12 transform -translate-y-1/2 z-20 cursor-pointer p-3 rounded-full bg-black/40 hover:bg-black/80 transition-colors backdrop-blur-sm"
    onClick={props.onClick}
  >
    <BsChevronRight className="text-white text-2xl md:text-3xl" />
  </div>
);

const ServiceCardCarousel: React.FC<ServiceCardCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="m-0 p-0 text-white"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-12 pb-10">
      <Slider {...settings} className="rounded-xl overflow-visible shadow-2xl">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black/10 rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src={src}
              alt={`Galería de imagen ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{ objectFit: 'contain' }}
              className="drop-shadow-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCardCarousel;
