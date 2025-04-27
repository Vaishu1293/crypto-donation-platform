// src/app/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
        
        {/* Left part */}
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">largerthan</span>
            <span className="italic text-white">i</span>
          </Link>

          {/* Links Group */}
          <div className="flex gap-16">
            {/* Home */}
            <div className="flex flex-col gap-2">
              <h4 className="uppercase text-sm font-semibold mb-4">Home</h4>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">About us</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Team</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">What we do</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Contact</Link>
            </div>

            {/* More */}
            <div className="flex flex-col gap-2">
              <h4 className="uppercase text-sm font-semibold mb-4">More</h4>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Projects</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Events</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Donate</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Blog</Link>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-2">
              <h4 className="uppercase text-sm font-semibold mb-4">Connect</h4>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Facebook</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Instagram</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Twitter</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Subscribe Right part */}
        <div className="flex flex-col gap-6 w-full md:max-w-md">
          <h3 className="text-2xl font-bold leading-tight">
            Subscribe to get latest updates
          </h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 w-full rounded-l-md bg-transparent border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-r-md hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
