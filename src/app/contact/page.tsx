'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="w-full bg-[#FFF2CC]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 flex flex-col lg:flex-row gap-16">

        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gray-800"></div>
            <p className="text-xs tracking-widest font-bold text-gray-600 uppercase">Contact us</p>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            We'd love to hear<br /> from you
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-gray-900">Let's talk!</h4>
            <p className="text-gray-700 text-base">+234 09012346514</p>
            <p className="text-gray-700 text-base">hello@largerthani.com</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-gray-900">Headoffice</h4>
            <p className="text-gray-700 text-base">8 Brewery Drive, Lagos, Nigeria.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-gray-900">Branch Office</h4>
            <p className="text-gray-700 text-base">Opp Opolo round about, Yenagoa, Bayelsa, Nigeria</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <Link href="#" className="text-gray-600 hover:text-black text-lg">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black text-lg">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black text-lg">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6560055397434!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b3b8c8d3c5%3A0xd35a0ff3a4f7a0!2sBrewery%20Drive%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1715079863820!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
}
