import { JSX } from "react/jsx-runtime";
interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps): JSX.Element {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}