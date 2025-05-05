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
      <Button variant="dark">Donate</Button>
    </header>
  );
};

export default Navbar;
