'use client';

import ContributionAndEvents from "@/sections/Events";
import Image from "next/image";
import Link from "next/link";

export default function TopNewsSection() {
  return (
   <>
     <section className="w-full py-20 px-6 md:px-20 bg-[#FFF2CC]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-20">

        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gray-800"></div>
            <p className="text-xs tracking-widest font-bold text-gray-600 uppercase">Top News</p>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Our goal is to<br />
            provide inclusive<br />
            care for children<br />
            with special needs
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
            Nunc ut sem vitae risus tristique posuere.
          </p>
          <Link href="#">
            <button className="bg-[#FAD048] hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded mt-4 text-base">
              Read more
            </button>
          </Link>
        </div>

        {/* Right News List */}
        <div className="bg-white rounded-2xl shadow-sm w-full max-w-lg p-8 flex flex-col gap-8">
          {/* Single News Item */}
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
              <Image
                src="/placeholder.jpg"
                alt="Autism care day"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-gray-900">Autism care day</h4>
              <p className="text-sm text-gray-500 mt-1">15th Nov 2022</p>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
              </p>
            </div>
          </div>

          {/* Second News Item */}
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
              <Image
                src="/placeholder.jpg"
                alt="Down syndrome outreach"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-gray-900">Down syndrome outreach</h4>
              <p className="text-sm text-gray-500 mt-1">15th Nov 2022</p>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
              </p>
            </div>
          </div>

          {/* Third News Item */}
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-300 flex-shrink-0">
              <Image
                src="/placeholder.jpg"
                alt="Caring for children with cerebral palsy"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-gray-900">Caring for children with cerebral palsy</h4>
              <p className="text-sm text-gray-500 mt-1">15th Nov 2022</p>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <ContributionAndEvents/>
   </>
  );
}
