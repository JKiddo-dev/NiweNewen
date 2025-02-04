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
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={props.onClick}
  >
    <BsChevronLeft className="text-white text-2xl" />
  </div>
);

const NextArrow = (props: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={props.onClick}
  >
    <BsChevronRight className="text-white text-2xl" />
  </div>
);

const ServiceCardCarousel: React.FC<ServiceCardCarouselProps> = ({ images }) => {
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

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[80vh]">
            {/* Use next/image for optimization */}
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill // Automatically adjusts width and height
              priority={index === 0} // Load the first image eagerly
              className="object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCardCarousel;
