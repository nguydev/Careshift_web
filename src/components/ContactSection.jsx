"use client";
import imageUrl from "../../public/cuate.png";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="w-full bg-[#F2FBFF] py-15 px-4 md:px-20">
      <div className="w-full md:w-9/12 mx-auto px-4 md:px-0">
        <div className="">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C4479]">
              Get in Touch with Us
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information - Left Side */}
            <div className="space-y-8">
              {/* Phone */}
              <div
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 hover:transform hover:translate-x-2"
                onClick={() => handleContactClick("phone", "+91-09876680014")}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    +91-09876680014
                  </p>
                  <p className="text-sm text-gray-600">Click to call</p>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 hover:transform hover:translate-x-2"
                onClick={() =>
                  handleContactClick("email", "otinives@gmail.com")
                }
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    otinives@gmail.com
                  </p>
                  <p className="text-sm text-gray-600">Click to email</p>
                </div>
              </div>
            </div>

            {/* Dynamic Illustration - Right Side */}
            <div className="flex justify-center lg:justify-end">
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
  );
};

export default ContactSection;
