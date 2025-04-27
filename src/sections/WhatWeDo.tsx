// src/app/sections/WhatWeDo.tsx
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#FFF3D9] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          {/* Section Heading */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-black" />
            <span className="uppercase tracking-wide text-xs font-semibold text-gray-700">
              What we do
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Some services we provide for our children
          </h2>

          {/* Description paragraph */}
          <p className="text-gray-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          {/* Services List */}
          <div className="flex flex-col gap-6 border-l-2 border-gray-300 pl-6 mt-6">
            {/* One Service Item */}
            {[
              { title: "Family support", icon: "/assets/images/icon-family.jpg" },
              { title: "Health benefits", icon: "/assets/images/icon-health.jpg" },
              { title: "Scholarships", icon: "/assets/images/icon-scholarshi.jpg" },
              { title: "Therapy", icon: "/assets/images/icon-therapy.jpg" },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src={service.icon} alt={service.title} width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Image */}
        <div className="relative">
          <Image
            src="/assets/images/whatwedo-placeholder.jpg"
            alt="Child listening"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
