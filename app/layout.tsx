import "./globals.css";

export const metadata = {
  title: "Product Store",
  description: "Dynamic Routing in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="min-h-screen">
          <header className="bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-2xl font-bold text-center">
              Mokin's Toys Store
            </h1>
          </header>

          <main>{children}</main>

          <footer className="bg-gray-800 text-white text-center p-4 mt-10">
            © 2026 Mokin S B
          </footer>
        </div>
      </body>
    </html>
  );
}
