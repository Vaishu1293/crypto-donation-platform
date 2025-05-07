'use client';

import Link from 'next/link';

export default function MoreProjectsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Title */}
        <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-black" />
                        <span className="uppercase tracking-widest text-xs font-semibold text-gray-700">
                            More Projects
                        </span>
                    </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              {/* Placeholder image */}
              <span className="text-2xl text-white font-bold">Image 1</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all p-6 flex flex-col justify-end">
              <h3 className="text-white text-lg font-bold mb-2">Mission smile 1k: Outdoor charity</h3>
              <p className="text-gray-200 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <Link href="#">
                <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <div className="w-full h-64 bg-gray-400 flex items-center justify-center">
              {/* Placeholder image */}
              <span className="text-2xl text-white font-bold">Image 2</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all p-6 flex flex-col justify-end">
              <h3 className="text-white text-lg font-bold mb-2">Weekly excursions</h3>
              <p className="text-gray-200 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <Link href="#">
                <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <div className="w-full h-64 bg-gray-500 flex items-center justify-center">
              {/* Placeholder image */}
              <span className="text-2xl text-white font-bold">Image 3</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all p-6 flex flex-col justify-end">
              <h3 className="text-white text-lg font-bold mb-2">Monthly public awareness</h3>
              <p className="text-gray-200 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <Link href="#">
                <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
