export default function AmazingFeatures() {
  const features = [
    {
      title: "Profile Creation & Management",
      description:
        "Easily create and manage your profile with simple relevant to your career. Customize it to stand out to employers.",
    },
    {
      title: "Job Application",
      description:
        "Browse and apply for jobs that match your skills and interests.",
    },
    {
      title: "Job Tracking",
      description:
        "Check in and out of your jobs, track your working hours, and ensure smooth operations.",
    },
    {
      title: "Earning Summary",
      description:
        "Get a detailed summary of your earnings and pay history all in one place.",
    },
    {
      title: "Profile Editing",
      description:
        "More options to your profile anytime to keep your details fresh and relevant.",
    },
    {
      title: "Easy Navigation",
      description:
        "Seamless design to make job hunting and managing your career effortless.",
    },
  ];

  return (
    <section className="w-full bg-[#F2FBFF] py-16 px-4 ">
      <div className="w-full md:w-9/12 mx-auto px-4 md:px-0">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0C4479] mb-12">
          Amazing Features
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 ml-0 md:ml-20 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-b border-gray-200 p-3 hover:border-gray-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-[#545454] leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
