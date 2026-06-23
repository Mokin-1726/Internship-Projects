export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blueviolet-100 text-gray-900 min-h-screen">
      
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Mokin's Toys Store
        </h1>
      </header>

      {/* Page Content */}
      <main className="p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        © 2026 Mokin S B
      </footer>

    </div>
  );
}