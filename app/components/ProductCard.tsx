import Link from "next/link"; 
 
export default function ProductCard({ product }: any) { 
  return ( 
    <Link href={`/products/${product.id}`}> 
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 
p-4 cursor-pointer"> 
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover rounded-lg" 
        /> 
        <h2 className="text-xl font-bold mt-3">{product.name}</h2> 
        <p className="text-gray-600 mt-2">₹{product.price}</p> 
      </div> 
    </Link> 
  ); 
}