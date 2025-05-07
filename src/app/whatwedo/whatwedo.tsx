'use client';

import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left - Text Content */}
        <div className="flex-1 w-full">
          {/* Top line and subheading */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gray-400"></div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-600">
              What We Do
            </h4>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We are working <br /> cross country
          </h2>

          {/* Paragraph */}
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="/assets/images/what-we-do-placeholder.jpg" // Update with your image path
              alt="Happy Children"
              width={500}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
