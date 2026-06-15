import { resume } from '../data/resume';


type Education = {
  degree: string;
  institution: string;
};

export default function Education() {
  return (
    <section className="bg-white rounded-3xl shadow p-8">
      
      <h2 className="text-2xl font-bold mb-6">
        Education
      </h2>

      <div className="space-y-4">
        {resume.education.map((item: Education, index: number) => (
          <div key={index}>
            
            <h3 className="font-semibold text-gray-900">
              {item.degree}
            </h3>

            <p className="text-gray-600">
              {item.institution}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}