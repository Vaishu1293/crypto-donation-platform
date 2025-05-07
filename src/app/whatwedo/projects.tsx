'use client';

import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Top Text */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gray-800"></div>
            <p className="text-xs tracking-widest font-bold text-gray-600 uppercase">Projects we have done</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            We are creating a place<br />
            where children with special<br />
            needs can thrive
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-xl group h-[350px] bg-gray-300">
            {/* Placeholder image */}
            <Image 
              src="/placeholder.jpg" 
              alt="Mission smile" 
              fill 
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <div className="text-white space-y-3">
                <h3 className="text-xl font-bold">Mission smile 1k: Outdoor charity</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <button className="mt-4 bg-white text-black font-semibold text-sm py-2 px-4 rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-xl group h-[350px] bg-gray-300">
            <Image 
              src="/placeholder.jpg" 
              alt="Weekly excursions" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <div className="text-white space-y-3">
                <h3 className="text-xl font-bold">Weekly excursions</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <button className="mt-4 bg-white text-black font-semibold text-sm py-2 px-4 rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-xl group h-[350px] bg-gray-300">
            <Image 
              src="/placeholder.jpg" 
              alt="Monthly public awareness" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <div className="text-white space-y-3">
                <h3 className="text-xl font-bold">Monthly public awareness</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <button className="mt-4 bg-white text-black font-semibold text-sm py-2 px-4 rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
