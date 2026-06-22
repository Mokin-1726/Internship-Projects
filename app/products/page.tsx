import ProductCard from "@/app/components/ProductCard"; 
import { products } from "@/app/data/products";
 
export default function ProductsPage() { 
  return ( 
    <div className="p-8"> 
      <h1 className="text-3xl font-bold mb-6">Products</h1> 
 
      <div className="grid md:grid-cols-3 gap-6"> 
        {products.map((product) => ( 
          <ProductCard key={product.id} product={product} /> 
        ))} 
      </div> 
    </div> 
  ); 
}