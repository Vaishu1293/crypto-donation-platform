// src/app/about/OurEvents.tsx

import Image from "next/image";
import Link from "next/link";

export default function OurEvents() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white flex flex-col gap-20">

      {/* Top Banner Section */}
      <div className="w-full relative rounded-xl overflow-hidden">
        <Image
          src="/assets/images/About Us/events/events-banner-placeholder.jpg" // Placeholder
          alt="Children Event Banner"
          width={1200}
          height={400}
          className="object-cover w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-snug">
            You can contribute to provide a place for children with special needs!
          </h2>
          <div className="flex gap-4 mt-6">
            <button className="bg-[#FAD048] text-black font-semibold py-2 px-6 rounded-md text-sm">
              Join as a volunteer
            </button>
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-md text-sm">
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Events List Section */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Heading */}
        <div className="flex items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Events</h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              date: "13",
              month: "APR",
              title: "A day with our wonderful children",
              link: "#"
            },
            {
              date: "25",
              month: "APR",
              title: "Seminar: Caring for children with autism",
              link: "#"
            },
          ].map((event, index) => (
            <Link key={index} href={event.link} className="bg-[#FAD048] rounded-xl p-6 flex justify-between items-center hover:scale-105 transition">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-gray-900">{event.date}</div>
                <div className="text-sm uppercase text-gray-700">{event.month}</div>
                <div className="mt-2 text-xs text-gray-700 tracking-wide">Next Events</div>
                <div className="mt-2 font-semibold text-gray-900">{event.title}</div>
              </div>
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                <span className="text-gray-900 text-lg font-bold">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
