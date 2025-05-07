'use client';
import { useState } from "react";

export default function ContributeSection() {
  const [tab, setTab] = useState('overview');

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white text-[#1D253C]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* How you can contribute Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              How you can contribute<br />caring for our kids
            </h2>
            <p className="text-gray-500 text-sm mt-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex gap-8 text-sm border-b border-gray-200">
              {['Overview', 'Impact', 'What You get'].map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item.toLowerCase().replace(/ /g, ''))}
                  className={`pb-2 ${tab === item.toLowerCase().replace(/ /g, '') ? "text-black font-semibold border-b-2 border-yellow-400" : "text-gray-500"}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-500 text-sm space-y-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* How we use your donation Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              How we use your<br />donation
            </h2>
          </div>
          <div className="flex-1 text-gray-500 text-sm space-y-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div className="flex-1 text-gray-500 text-sm space-y-4">
            <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
