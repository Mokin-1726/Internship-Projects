import {resume} from '../data/resume';

export default function Contact() {
  return (
    <section className="bg-blue-600 text-white rounded-3xl p-8">
      
      <h2 className="text-2xl font-bold">
        Contact
      </h2>

      <div className="mt-4 space-y-3 text-sm">

        <p>📧 {resume.email}</p>
        <p>📞 {resume.phone}</p>
        <p>📍 {resume.location}</p>

      </div>

    </section>
  );
}