import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gray-900">
          My Resume
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/resume" className="hover:text-blue-600">
            Resume
          </Link>

          <Link href="#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

      </div>

    </nav>
  );
}