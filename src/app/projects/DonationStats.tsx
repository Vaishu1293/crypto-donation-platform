'use client';

export default function DonationStatsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#FFF1CC]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Stat 1 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#D6C39F] flex items-center justify-center">
            {/* Icon placeholder */}
            <span className="text-black">🏠</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1D253C]">
              20+ orphanage visit in 2 months
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#D6C39F] flex items-center justify-center">
            {/* Icon placeholder */}
            <span className="text-black">🔲</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1D253C]">
              230 People Have donated
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#D6C39F] flex items-center justify-center">
            {/* Icon placeholder */}
            <span className="text-black">👥</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1D253C]">
              30+ people joined
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#D6C39F] flex items-center justify-center">
            {/* Icon placeholder */}
            <span className="text-black">💰</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1D253C]">
              1.2m Raised for this initiate
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
