import { resume } from '../data/resume';
import type { Resume } from '../types/resume'; // adjust path if needed

export default function Experience() {
  return (
    <section className="bg-white rounded-3xl shadow p-8">
      
      <h2 className="text-2xl font-bold mb-6">
        Experience
      </h2>

      {resume.experience.map(
        (job: Resume["experience"][number], index: number) => (
          <div key={index} className="mb-6">
            
            <h3 className="font-bold text-lg text-gray-900">
              {job.title}
            </h3>

            <p className="text-blue-600 font-medium">
              {job.company}
            </p>

            <p className="text-gray-500 text-sm">
              {job.period}
            </p>

            <p className="mt-2 text-gray-700 leading-relaxed">
              {job.description}
            </p>

          </div>
        )
      )}
      
    </section>
  );
}