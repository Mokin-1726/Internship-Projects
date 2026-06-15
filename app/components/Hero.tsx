import {resume} from '../data/resume';

export default function Hero() {
  return (
    <section className="bg-white rounded-3xl shadow p-8">
      
      <h1 className="text-5xl font-bold text-gray-900">
        {resume.name}
      </h1>

      <p className="text-xl text-blue-600 mt-2">
        {resume.role}
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {resume.summary}
      </p>

    </section>
  );
}