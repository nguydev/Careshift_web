"use client";

import React from "react";
import Image from "next/image";

// Local image imports
import googleplay from "../../public/gplay.png";
import appleplay from "../../public/aplay.png";
import phoneImage from "../../public/downloadimg.png";

const AppDownloadSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto mt-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0C4479]">
            Download Now
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side - Phone Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
              <Image
                src={phoneImage}
                alt="Phone Mockup"
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900">
              Download the App and Find Your Perfect Job Today
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Available on iOS and Android. Start your journey towards a
              fulfilling career in just a few taps!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Image
                src={googleplay}
                alt="Get it on Google Play"
                className="w-40 h-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
              <Image
                src={appleplay}
                alt="Download on the App Store"
                className="w-40 h-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
