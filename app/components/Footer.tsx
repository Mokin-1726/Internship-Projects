export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Babu Subramanian. All rights reserved.
        </p>

        <p className="text-gray-400 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}