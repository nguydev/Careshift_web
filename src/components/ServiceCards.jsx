"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import processImg1 from "../../public/imgone.jpg"; // local image
import processImg2 from "../../public/imgtwo.jpg"; // local image
import processImg3 from "../../public/imagethree.jpg"; // local image

const jobCategories = [
  {
    id: 1,
    title: "Domestic Cleaner",
    image: processImg1,
  },
  {
    id: 2,
    title: "Carer",
    image: processImg2,
  },
  {
    id: 3,
    title: "Nurse",
    image: processImg3,
  },
];

export default function JobSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % jobCategories.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + jobCategories.length) % jobCategories.length
    );
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPrevIndex = () =>
    (currentSlide - 1 + jobCategories.length) % jobCategories.length;
  const getNextIndex = () => (currentSlide + 1) % jobCategories.length;

  return (
    <div className="w-full px-4 md:px-0 my-20 relative">
      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Left Card */}
        <div
          className="relative w-full max-w-xs h-64 md:w-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 transform scale-95 opacity-80 hover:opacity-95"
          onClick={() => goToSlide(getPrevIndex())}
        >
          <Image
            src={jobCategories[getPrevIndex()].image}
            alt={jobCategories[getPrevIndex()].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 via-[#00e5ff]/10 to-[#09bbcc]/80"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-lg">
              {jobCategories[getPrevIndex()].title}
            </h3>
          </div>
        </div>

        {/* Center Card */}
        <div className="relative w-full max-w-md h-72 md:w-[440px] md:h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 transform scale-105 shadow-2xl z-10">
          <Image
            src={jobCategories[currentSlide].image}
            alt={jobCategories[currentSlide].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 440px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 via-[#00e5ff]/10 to-[#09bbcc]/80"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white text-xl md:text-2xl font-semibold text-center drop-shadow-lg">
              {jobCategories[currentSlide].title}
            </h3>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="relative w-full max-w-xs h-64 md:w-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 transform scale-95 opacity-80 hover:opacity-95"
          onClick={() => goToSlide(getNextIndex())}
        >
          <Image
            src={jobCategories[getNextIndex()].image}
            alt={jobCategories[getNextIndex()].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 via-[#00e5ff]/10 to-[#09bbcc]/80"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-lg">
              {jobCategories[getNextIndex()].title}
            </h3>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {jobCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-[#27C8DD] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
