'use client';

import { FaHome, FaHeartbeat, FaBook, FaBath, FaUserMd, FaBullhorn } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#fef2cb]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          What we do for our kids with special needs
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Service Card */}
          <div className="flex items-start gap-4">
            <FaHome className="text-black text-3xl" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Family support</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex items-start gap-4">
            <FaHeartbeat className="text-black text-3xl" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Health benefits</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex items-start gap-4">
            <FaBook className="text-black text-3xl" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex items-start gap-4">
            <FaBath className="text-black text-3xl" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Basic amenities</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex items-start gap-4">
            <FaUserMd className="text-black text-3xl" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Therapy</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex items-start gap-4">
            <FaBullhorn className="text-black text-3xl" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Public outreach</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
