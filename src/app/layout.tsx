// layout.tsx

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
      <body>{children}</body>
    </html>
  );
}
