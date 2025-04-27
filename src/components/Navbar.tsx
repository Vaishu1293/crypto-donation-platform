import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
      </Link>
      <nav className="hidden md:flex gap-8 items-center">
        {["Home", "About us", "What We Do", "Media", "Contact"].map((item) => (
          <Link key={item} href={`#${item.replace(/\s+/g, "").toLowerCase()}`} className="text-black hover:text-gray-700">
            {item}
          </Link>
        ))}
      </nav>
      <Button variant="dark">Donate</Button>
    </header>
  );
};

export default Navbar;
