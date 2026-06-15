import {resume} from '../data/resume';

export default function Projects() {
  return (
    <section className="bg-white rounded-3xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {resume.projects.map((project: string, index: number) => (
          <div
            key={index}
            className="border rounded-xl p-4"
          >
            <h3 className="font-semibold">
              {project}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}