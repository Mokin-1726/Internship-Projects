import {resume} from '../data/resume';

export default function Skills() {
  return (
    <section className="bg-white rounded-3xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {resume.skills.map((skill: string) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}