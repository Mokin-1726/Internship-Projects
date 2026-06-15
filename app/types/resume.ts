export type Resume = {
  name: string;
  role: string;
  company: string;
  location: string;
  email: string;
  phone: string;

  summary: string;

  skills: string[];

  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];

  education: {
    degree: string;
    institution: string;
  }[];

  projects: string[];
};