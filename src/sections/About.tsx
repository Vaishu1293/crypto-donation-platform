// src/app/sections/AboutUs.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-black" />
            <span className="uppercase tracking-wide text-xs font-semibold text-gray-700">
              Know About Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            We provide a place for children with special needs
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <Link href="#">
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded">
              Learn more
            </button>
          </Link>
        </div>

        {/* Right content (Image with play button) */}
        <div className="relative">
          <Image
            src="/assets/images/aboutus-placeholder.jpg"
            alt="Children walking"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-4 shadow-lg">
              <Image src="/assets/images/play-icon.svg" alt="Play" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Our Supporters */}
      <div className="mt-16">
        <h4 className="uppercase text-sm font-semibold tracking-widest mb-8 text-gray-700">
          Our Supporters
        </h4>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {Array(6).fill(0).map((_, index) => (
            <Image
              key={index}
              src={`/assets/images/logo-placeholder-${index + 1}.svg`}
              alt="Supporter logo"
              width={100}
              height={40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
