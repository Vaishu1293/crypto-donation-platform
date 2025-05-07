import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm">
      <Link href="/">
        <Image src="/assets/images/logo.png" alt="Logo" width={60} height={20} />
      </Link>
      <nav className="hidden md:flex gap-8 items-center">
        {/* Real page navigation */}
        <Link href="/" className="text-black hover:text-gray-700">
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-gray-700">
          About Us
        </Link>
        <Link href="/whatwedo" className="text-black hover:text-gray-700">
          What We Do
        </Link>
        <Link href="/media" className="text-black hover:text-gray-700">
          Media
        </Link>
        <Link href="/contact" className="text-black hover:text-gray-700">
          Contact
        </Link>
      </nav>
      <Link href="/donation">
      <button className="bg-[#1e293b] hover:bg-[#111827] text-white font-semibold px-5 py-2 rounded">
        Donate
      </button>
      </Link>
    </header>
  );
};

export default Navbar;
