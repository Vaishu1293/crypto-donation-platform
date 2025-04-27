import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Home</h4>
          <ul className="space-y-1">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">What we do</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">More</h4>
          <ul className="space-y-1">
            <li><Link href="#">Projects</Link></li>
            <li><Link href="#">Events</Link></li>
            <li><Link href="#">Donate</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1">
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Instagram</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© 2025 LargerthanI. All rights reserved.</div>
        <div className="flex gap-2">
          <input type="email" placeholder="Your email" className="p-2 rounded text-black" />
          <Button variant="secondary">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
