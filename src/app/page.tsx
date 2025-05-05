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
    <>
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <Projects />
      <DonationBreakdown />
      <ContributionAndEvents />
    </>
  );
}
