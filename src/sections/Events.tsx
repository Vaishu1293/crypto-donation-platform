// src/app/sections/ContributionAndEvents.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // For smooth animations

export default function ContributionAndEvents() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Top Banner */}
        <motion.div 
          className="relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background image */}
          <Image
            src="/assets/contribution-banner.jpg" // Temporary placeholder
            alt="Contribution Banner"
            width={1200}
            height={400}
            className="w-full h-[300px] object-cover"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center gap-4 p-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
              You can contribute to provide a place for children with special needs!
            </h2>
            <div className="flex gap-4 mt-4 flex-wrap justify-center">
              <Link href="#">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded">
                  Join as a volunteer
                </button>
              </Link>
              <Link href="#">
                <button className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2 rounded border border-gray-300">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Our Events Section */}
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 border-b border-gray-300 pb-4">
            Our Events
          </h3>

          {/* Events List */}
          <div className="flex flex-wrap gap-6">
            
            {/* Single Event Card */}
            <div className="flex-1 min-w-[250px] bg-yellow-400 hover:bg-yellow-500 rounded-xl p-6 flex flex-col gap-2 transition">
              <div className="text-black text-lg font-bold flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold">13</span>
                  <span className="text-xs uppercase tracking-wide">Apr</span>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-black">
                    Next Events
                  </div>
                  <div className="font-bold">A day with our wonderful children</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Second Event Card */}
            <div className="flex-1 min-w-[250px] bg-yellow-400 hover:bg-yellow-500 rounded-xl p-6 flex flex-col gap-2 transition">
              <div className="text-black text-lg font-bold flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold">25</span>
                  <span className="text-xs uppercase tracking-wide">Apr</span>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-black">
                    Next Events
                  </div>
                  <div className="font-bold">Seminar: Caring for children with autism</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    →
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
