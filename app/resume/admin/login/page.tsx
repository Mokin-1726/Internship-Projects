"use client";

import { useState, FormEvent } from "react";

interface UserData {
  id: number;
  user_name: string;
  user_email: string;
  referral_code: string;
  mobile_no: string;
  role_id: number;
  user_status: number;
  photo: string;
  date_created: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(
        "https://sbstechnologies.in/cloud/mobile/login/check_user_login.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.data));
        setMessage("✅ Login Successful");

        setTimeout(() => {
          window.location.href = "/resume/admin/dashboard";
        }, 1000);
      } else {
        setMessage(data.message || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-green-400 via-cyan-500 to-blue-600 flex items-center justify-center px-4">

    <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl shadow-lg mb-4">
          🚀
        </div>

        <h1 className="text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="text-white/80 mt-2">
          Sign in to continue
        </p>
      </div>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 mb-4 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-cyan-300 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 mb-4 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-cyan-300 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-white text-cyan-600 font-bold p-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg"> 
          Login
        </button>
        

        {message && (
          <div className="mt-4 text-center">
            <p className="bg-white/20 text-white py-3 rounded-xl font-medium">
              {message}
            </p>
          </div>
          
        )}
      </form>
        
    </div>

  </div>
);
}


