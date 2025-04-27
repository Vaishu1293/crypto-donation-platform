// src/app/sections/DonationBreakdown.tsx
"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// REGISTER properly all needed parts
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, CategoryScale);

export default function DonationBreakdown() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "doughnut", // THIS is correct once registered
        data: {
          labels: [
            "40% child care home",
            "35% cleanliness program",
            "10% helping people",
            "10% excursions",
            "5% feeding the poor",
          ],
          datasets: [
            {
              data: [40, 35, 10, 10, 5],
              backgroundColor: [
                "#C6F6D5", // light green
                "#D6BCFA", // light purple
                "#FEFCBF", // light yellow
                "#FBD38D", // light orange
                "#FBB6CE", // light pink
              ],
              borderWidth: 0,
              cutout: "70%", // makes it a doughnut
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          animation: {
            animateRotate: true,
            duration: 2000, // smooth animation
          },
        },
      });
    }
  }, []);

  return (
    <section className="w-full bg-black py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Text */}
        <div className="flex flex-col gap-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How we spend your donations and where it goes
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.
          </p>

          {/* Legends */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#C6F6D5] block rounded-full" />
              40% child care home
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#D6BCFA] block rounded-full" />
              35% cleanliness program
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#FEFCBF] block rounded-full" />
              10% helping people
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#FBD38D] block rounded-full" />
              10% excursions
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#FBB6CE] block rounded-full" />
              5% feeding the poor
            </div>
          </div>
        </div>

        {/* Right Chart */}
        <div className="flex justify-center">
          <canvas ref={chartRef} width={300} height={300} />
        </div>

      </div>
    </section>
  );
}
