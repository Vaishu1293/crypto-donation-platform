'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DonateSection() {
  return (
    <section className="w-full bg-[#FFF2CC] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Side Text */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gray-800"></div>
            <p className="text-xs tracking-widest font-bold text-gray-600 uppercase">Donate</p>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Making a donation for<br /> our children.
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            When you donate, you're supporting effective care to children with special needs—an investment in the leaders of tomorrow.
          </p>

          <Link href="#" className="inline-block">
            <button className="bg-[#FAD048] hover:bg-[#e5bd3d] text-black font-semibold px-6 py-3 rounded">
              Donate now
            </button>
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="flex-shrink-0">
          <div className="w-[300px] h-[300px] relative rounded-xl overflow-hidden">
            <Image
              src=""
              alt="Donate Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
