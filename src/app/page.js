import React from "react";

// Component Imports
import Banner from "@/components/Banner";
import ProcessFlow from "@/components/ProcessFlow";
import AmazingFeatures from "@/components/AmazingFeatures";
import ServiceCards from "@/components/ServiceCards";
import ContactSection from "@/components/ContactSection";
import AppDownloadSection from "@/components/AppDownloadSection";

const Homepage = () => {
  return (
    <main className="space-y-24">
      <Banner />
      <ProcessFlow />
      <AmazingFeatures />
      <ServiceCards />
      <ContactSection />
      <AppDownloadSection />
    </main>
  );
};

export default Homepage;
