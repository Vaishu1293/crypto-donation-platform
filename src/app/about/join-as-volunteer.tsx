'use client';

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function VolunteerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg w-[90%] md:w-[600px] p-8">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl">
          ✕
        </button>

        {/* Modal Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Join as a volunteer</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-semibold text-gray-700">First Name</label>
                <input type="text" className="border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-semibold text-gray-700">Last Name</label>
                <input type="text" className="border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">Email ID</label>
              <input type="email" className="border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">Message</label>
              <textarea rows={4} className="border border-gray-300 focus:outline-none focus:border-gray-500 rounded-md p-2 resize-none" placeholder="Type your message" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-[#FAD048] text-black font-semibold py-2 rounded-md hover:bg-[#e5bd3d]">
              Send message
            </button>
          </form>
        </div>

      </div>
    </div>,
    document.body
  );
}
