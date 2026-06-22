import { products } from "@/app/data/products";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ FIX

  const product = products.find((item) => item.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">{product.name}</h1>
      <p className="text-2xl text-blue-600 mt-3">₹{product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <div className="py-5">
        <a href="/products" className="px-2 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition hover:scale-105 active:scale-95">Back</a>
      </div>
    </div>
  );
}