'use client';

import { ArrowRight } from 'lucide-react'; // or use any icon library you prefer
import Link from "next/link";

export default function OtherEvents() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
          Other events
        </h2>

        {/* Event List */}
        <div className="flex flex-col gap-6">

          {/* Single Event Card */}
          <Link href="#">
            <div className="bg-yellow-400 hover:bg-yellow-500 rounded-xl p-6 flex items-center justify-between transition">
              
              {/* Left Side */}
              <div className="flex items-center gap-6">
                {/* Date */}
                <div className="flex flex-col text-gray-900 font-bold items-center justify-center">
                  <span className="text-3xl leading-none">23</span>
                  <span className="text-xs tracking-widest uppercase">Apr</span>
                </div>

                {/* Title and Label */}
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-wide text-gray-800">Next Events</span>
                  <span className="text-lg font-semibold text-gray-900">
                    Say no to plastic usage and save the planet
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowRight size={18} className="text-black" />
              </div>

            </div>
          </Link>

          {/* Another Event Card */}
          <Link href="#">
            <div className="bg-yellow-400 hover:bg-yellow-500 rounded-xl p-6 flex items-center justify-between transition">
              
              {/* Left Side */}
              <div className="flex items-center gap-6">
                {/* Date */}
                <div className="flex flex-col text-gray-900 font-bold items-center justify-center">
                  <span className="text-3xl leading-none">30</span>
                  <span className="text-xs tracking-widest uppercase">Apr</span>
                </div>

                {/* Title and Label */}
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-wide text-gray-800">Next Events</span>
                  <span className="text-lg font-semibold text-gray-900">
                    Monthly orphanage visits
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowRight size={18} className="text-black" />
              </div>

            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
