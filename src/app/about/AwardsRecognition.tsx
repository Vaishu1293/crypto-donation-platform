// src/app/about/AwardsRecognition.tsx

import Image from "next/image";

export default function AwardsRecognition() {
  return (
    <section className="w-full flex flex-col py-20 px-6 md:px-20 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col gap-12"> {/* CHANGED gap-16 to gap-12 */}

    {/* Awards Heading */}
    <div className="text-center mb-6"> {/* ADDED margin-bottom */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Awards & Recognitions</h2>
    </div>

    {/* Awards List */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {[
        { year: "2021", title: "Best NGO Award", location: "BERLIN, GERMANY" },
        { year: "2018", title: "Global Award", location: "NEW YORK, USA" },
        { year: "2014", title: "CSN Award", location: "NEW DELHI, INDIA" },
        { year: "2010", title: "NGO of the year Award", location: "VIENNA, AUSTRIA" },
      ].map((award, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <Image
            src={`/assets/images/About Us/awards/award-icon-${index + 1}.jpg`}
            alt="Award Icon"
            width={60}
            height={60}
          />
          <div className="text-lg font-semibold text-gray-900">{award.year}</div>
          <div className="text-base font-bold text-gray-800">{award.title}</div>
          <div className="text-sm text-gray-500 uppercase">{award.location}</div>
        </div>
      ))}
    </div>

    {/* Our Journey Block */}
    <div className="w-full bg-[#FAD048] rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 mt-10"> {/* ADDED margin-top */}
      
      {/* Left Text */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">
          Our Journey
        </div>
        <h3 className="text-4xl font-bold text-gray-900 leading-snug">
          How we raised 34M
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim 
          in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor 
          interdum nulla, ut commodo diam libero vitae erat.
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-8 mt-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">34M+</span>
            <span className="text-gray-700 text-sm">Donation Received</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">400+</span>
            <span className="text-gray-700 text-sm">Volunteers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">20+</span>
            <span className="text-gray-700 text-sm">Care homes</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <Image
          src="/assets/images/About Us/awards/our-journey-placeholder.jpg"
          alt="Our Team Journey"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>

    </div>
  </div>
</section>

  );
}
