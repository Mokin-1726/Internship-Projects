"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/resume/admin/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/resume/admin/login";
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  }
const getRoleName = (roleId: number) => {
  switch (roleId) {
    case 1:
      return "User";
    case 2:
      return "Premium User";
    case 3:
      return "Intern";
    default:
      return "User";
  }
};
  return (
    <div className="dashboard-bg">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-white text-3xl font-bold">
          Welcome, {user.user_name}
        </h1>

        <div className="flex gap-4">

  <Link
    href="/resume"
    className="bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
  >
    Gallery
  </Link>

  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:cursor-pointer"
  >
    Logout
  </button>

</div>
</div>
      {/* Profile Section */}
      <div className="px-10">

        <div className="glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">

          <img
            src={user.photo}
            alt="Profile"
            className="float-img w-40 h-40 rounded-full border-4 border-white object-cover shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-white">
              {user.user_name}
            </h2>

            <p className="text-white/90 text-lg mt-2">
              {user.user_email}
            </p>

            <div className="flex flex-wrap gap-3 mt-5">

              <span className="bg-white text-slate-700 px-4 py-2 rounded-full font-medium">
                ID : {user.id}
              </span>

              <span className="bg-white text-slate-700 px-4 py-2 rounded-full font-medium">
  Role : {getRoleName(user.role_id)}
</span>

              <span className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
                Active
              </span>

            </div>

          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="glass-card hover-card rounded-3xl p-6">
            <h3 className="text-white text-lg">
              Mobile Number
            </h3>

            <p className="text-2xl font-bold text-white mt-3">
              {user.mobile_no}
            </p>
          </div>

          <div className="glass-card hover-card rounded-3xl p-6">
            <h3 className="text-white text-lg">
              Referral Code
            </h3>

            <p className="text-2xl font-bold text-white mt-3">
              {user.referral_code}
            </p>
          </div>

          <div className="glass-card hover-card rounded-3xl p-6">
            <h3 className="text-white text-lg">
              Status
            </h3>

            <p className="text-2xl font-bold text-green-300 mt-3">
              {user.user_status === 1
                ? "Active"
                : "Inactive"}
            </p>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="glass-card hover-card rounded-3xl p-6">
            <h3 className="text-white text-lg">
              Created Date
            </h3>

            <p className="text-xl text-white mt-3">
              {user.date_created}
            </p>
          </div>

          <div className="glass-card hover-card rounded-3xl p-6">
            <h3 className="text-white text-lg">
              Email
            </h3>

            <p className="text-xl text-white mt-3 break-all">
              {user.user_email}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}