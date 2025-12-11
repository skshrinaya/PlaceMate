import React from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/home.svg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empower Your Placement Journey with  
            <span className="text-primary"> CampusConnect</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Explore alumni experiences, connect with mentors, prepare for interviews,
            and boost your placement success—all in one platform.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/alumni"
              className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primaryDark transition"
            >
              Explore Alumni
            </Link>

            <Link
              to="/login"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={homeimg}
            alt="Students"
            className="w-[350px] md:w-[500px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-primary">
          Why CampusConnect?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">Alumni Insights</h3>
            <p className="text-gray-600">
              Read interview experiences from previously placed students and learn
              what top companies really ask.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">Mentor Connect</h3>
            <p className="text-gray-600">
              Connect with your seniors, schedule mock interviews, and receive
              guidance from real experience.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">Preparation Resources</h3>
            <p className="text-gray-600">
              Explore curated study materials, company-specific guidance, and
              placement preparation tips.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-6 mt-10">
        <p>© 2025 CampusConnect. All rights reserved.</p>
      </footer>

    </div>
  );
}
