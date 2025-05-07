'use client';

import { MapPin, Calendar } from 'lucide-react'; // You can also use Heroicons if you prefer

export default function EventBanner() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-[#FDF0CD]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          A day with our wonderful <br /> children
        </h1>

        {/* Event Details */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-800">
          
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Opp Opolo round about, Yenagoa, Bayelsa, Nigeria</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>April 13, 2022 8:30 AM</span>
          </div>

        </div>

      </div>
    </section>
  );
}
