"use client"; 
import Link from "next/link";
import { useState } from "react"; 
 
export default function SearchFilter() { 
  const [search, setSearch] = useState(""); 
 
  const products = [ 
    "Apple", 
    "Banana", 
    "Orange", 
    "Mango", 
    "Grapes", 
  ]; 
 
  const filteredProducts = products.filter((item) => 
    item.toLowerCase().includes(search.toLowerCase()) 
  ); 
 
  return ( 
    <div className="bg-white p-5"> 
    <div className="bg-black text-white p-2">
      <h1 className="text-3xl font-bold mb-4"> 
        Search Filter 
      </h1> 
 
      <input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="bg-white text-black border p-2 rounded w-full" 
      /> 
 
      <ul className="mt-4"> 
        {filteredProducts.map((item, index) => ( 
          <li key={index} className="py-1"> 
            {item} 
          </li> 
        ))} 
      </ul> 
      <div className="py-3">
      <Link
        href="/resume"
        className="mt-10 px-10 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition hover:scale-105 active:scale-95"
      >
       Back
      </Link>
      </div>
    </div>
    </div> 
  );}