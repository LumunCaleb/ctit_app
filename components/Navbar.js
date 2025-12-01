import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="CT IT Logo" width={40} height={40} />
        {/* <span className="font-bold text-xl text-gray-800">CTIT</span> */}
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
