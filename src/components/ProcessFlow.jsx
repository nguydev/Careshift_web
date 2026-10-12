import Image from "next/image";
import processImg from "../../public/processImg.png";

export default function ProcessFlow() {
  const steps = [
    {
      number: 1,
      title: "Set up your Profile",
      description:
        "Set up a profile that highlights your experience and preferences.",
    },
    {
      number: 2,
      title: "Browse and Apply for Jobs",
      description: "Find the jobs that fit your skills and apply.",
    },
    {
      number: 3,
      title: "Track Your Work and Earnings",
      description:
        "Keep track of your hours, bonuses and stay updated on your earnings.",
    },
    {
      number: 4,
      title: "Edit Your Profile Anytime",
      description:
        "Keep your profile current and enhance your chances of landing the right job.",
    },
  ];

  return (
    <div className="w-full md:w-9/12 mx-auto px-4 md:px-0 mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#0C4479] mb-8 lg:mb-5">
        How It Works
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] ">
            <Image
              src={processImg}
              alt="Mobile app interface"
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - Process Steps */}
        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 lg:space-y-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start">
              {/* Step Circle */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {step.number}
                </div>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 sm:top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-10 sm:h-12 lg:h-14 bg-cyan-400"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="ml-4 sm:ml-6 flex-1">
                <div className="text-sm sm:text-base text-cyan-600 font-semibold mb-1">
                  Step {step.number}
                </div>
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
