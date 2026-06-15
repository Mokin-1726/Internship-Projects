import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-Metallic Gold-100 px-4 animate-fade-in">
      
      <h1 className="text-4xl md:text-5xl font-bold text-black 800 text-center">
        Welcome to My Resume App
      </h1>

      <p className="mt-4 text-white 600 text-center max-w-xl">
        This is a professional resume built using Next.js, TypeScript, and Tailwind CSS.
      </p>

      <Link
        href="/resume"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        View Resume
      </Link>
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6">View my Works</h2>

        <div className="grid md:grid-cols-3 gap-6  hover:shadow-lg transition">
          <Link href="/mokin.pdf" download target="_blank">
          <Card title="Resume" description="Describes about Mokin's Portfolio." />
          </Link>

        <Link href="/mokin-image.jpg" target="_blank">
        <Card title="Image" description="View My Image" />
        </Link>

          <Link href="https://github.com/Mokin-1726">
          <Card
            title="My Github Profile"
            description="View my projects done."
          /></Link>
        </div>
      </section>
      <div>
        <div>
          <div>
            <div className="text-white 600">
            <footer><center><small>&copy; 2026 Mokin S B. All rights reserved.</small></center></footer>
            </div>
          </div>
        </div>
      </div>
          </main>
          
  );
}