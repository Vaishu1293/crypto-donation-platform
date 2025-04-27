// src/components/sections/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-placeholder.jpg" // ← replace this later with your real image
          alt="Children background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Inclusive care for <br /> children with special needs
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200">
            What we do
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded-md flex items-center gap-2 hover:bg-white hover:text-black">
            <span>Play Video</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </button>
        </div>

        {/* Stats line */}
        <div className="flex justify-between items-center w-full max-w-4xl text-sm font-medium">
          <span>230 children under our care</span>
          <span>58 donations collected</span>
        </div>
      </div>
    </section>
  );
}
