"use client";
import Image from "next/image";
import bannerImage from "../../public/banner.jpg";
import imageUrl from "../../public/bannerimg.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative min-h-screen sm:min-h-[450px] md:min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background image */}
      <Image
        src={bannerImage || "/placeholder.svg"}
        alt="Career opportunities banner background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E2FF]/40 via-[#014E58]/60 to-black/60 opacity-90" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex items-center justify-center py-10 sm:py-12 md:py-20">
        <div className="w-full md:w-9/12 mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 z-30">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Next Career Opportunity, One Click Away!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Whether you're a Registered Nurse, Domestic Cleaner, or in any
                other career, Core Finder AU connects you with the right
                opportunities.
              </p>
              <div>
                <Link href="/report">
                  <button className="bg-[#093056] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                    Incident Report
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt="Professional career opportunities illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
