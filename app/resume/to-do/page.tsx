"use client"; 
import Link from "next/link";
 import { useState } from "react"; 
export default function TodoApp() { 
  const [task, setTask] = useState(""); 
  const [todos, setTodos] = useState<string[]>([]); 
 
  const addTodo = () => { 
    if (!task.trim()) return; 
 
    setTodos([...todos, task]); 
    setTask(""); 
  }; 
 
  const deleteTodo = (index: number) => { 
    setTodos(todos.filter((_, i) => i !== index)); 
  }; 
 
  return ( 
    <div className=" bg-white rounded border-radus 20 p-5">
      <div className="bg-black rounded-2xl text-white py-5 px-2">
      <h1 className="text-3xl font-bold mb-4"> 
        Todo App 
      </h1> 
 
      <input 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter task" 
        className="border p-2 rounded" 
      /> 
 
      <button 
        onClick={addTodo} 
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" 
      > 
        Add 
      </button> 

       
 
          <ul className="mt-4"> 
        {todos.map((todo, index) => ( 
             <li 
            key={index} 
            className="flex justify-between py-2" 
          > 
            {todo} 
 
            <button 
              onClick={() => deleteTodo(index)} 
              className="text-red-500" 
            > 
              Delete 
            </button> 
            
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
  ); 
} 
