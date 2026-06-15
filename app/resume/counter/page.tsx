"use client"; 
import Link from "next/link"; 
import { useState } from "react"; 
 
export default function CounterApp() { 
  const [count, setCount] = useState(0); 
 
  return ( 
    <div className="bg-white rounded-2xl p-5"> 
    <div className="bg-black rounded-3xl text-white p-2">
      <h1 className="text-3xl font-bold"> 
        Counter: {count} 
      </h1> 
 
      <div className="space-x-2 mt-4"> 
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 bg-green-500 text-white rounded" 
        > 
          + 
        </button> 
 
        <button 
          onClick={() => setCount(count - 1)} 
          className="px-4 py-2 bg-red-500 text-white rounded" 
        > 
          - 
        </button> 
 
        <button 
          onClick={() => setCount(0)} 
          className="px-4 py-2 bg-gray-500 text-white rounded" 
        > 
          Reset 
        </button> 
      </div> 
      <div className="py-5">
      <Link
        href="/resume"
        className="mt-10 px-10 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition hover:scale-105 active:scale-95"
      >
       Back
      </Link>
      </div>
    </div>
    </div> 
  ); 
}