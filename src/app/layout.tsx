// layout.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost, Roboto } from "next/font/google";

// Setup Jost
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",  // We will use this as CSS variable
  weight: ["400", "500", "600", "700"], // As needed
});

// Setup Roboto
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "NGO Website",
  description: "Generated from Figma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${roboto.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children} {/* Dynamic page content here */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
