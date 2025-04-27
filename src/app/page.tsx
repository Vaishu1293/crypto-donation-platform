import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@/sections/About";
import DonationBreakdown from "@/sections/DonationStats";
import ContributionAndEvents from "@/sections/Events";
import HeroSection from "@/sections/Hero";
import Projects from "@/sections/Projects";
import WhatWeDo from "@/sections/WhatWeDo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-1">
        {/* Here you will later insert your sections like Hero, About, WhatWeDo etc */}
        <div className="container mx-auto px-4 py-8">
          <HeroSection/>
          <AboutUs/>
          <WhatWeDo/>
          <Projects/>
          <DonationBreakdown/>
          <ContributionAndEvents/>
          {/* <h1 className="text-4xl font-bold text-center">Home Page Coming Soon</h1> */}
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
