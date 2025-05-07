'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function DonationBreakdown() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new chart
      chartInstance.current = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Food', 'Education', 'Healthcare', 'Shelter'],
          datasets: [
            {
              label: 'Donations',
              data: [40, 25, 20, 15],
              backgroundColor: [
                '#FBBF24',
                '#60A5FA',
                '#34D399',
                '#F87171',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <canvas ref={chartRef} />
    </div>
  );
}
