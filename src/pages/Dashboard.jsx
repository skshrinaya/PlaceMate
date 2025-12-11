// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const mockUser = {
  name: "Shrinaya SK",
  role: "Student",
  branch: "CSE",
  batch: "2024",
  linkedin: "#",
  avatar: null, // put "/assets/avatar.png" if you add one
};

const quickActions = [
  { title: "Explore Alumni", desc: "Find seniors by company & skills", to: "/alumni" },
  { title: "Find Mentors", desc: "Schedule mock interviews & guidance", to: "/mentors" },
  { title: "Add Experience", desc: "Share interview rounds & tips", to: "/experiences" },
  { title: "My Schedule", desc: "View your booked mocks", to: "/schedule" },
];

const recentExperiences = [
  {
    id: 1,
    author: "Aman Verma",
    company: "Zoho",
    title: "SDE - Interview Experience",
    summary: "DSA rounds with emphasis on Graphs and System design. HR focused on projects.",
    date: "Nov 10, 2025",
  },
  {
    id: 2,
    author: "Neha Singh",
    company: "Amazon",
    title: "SDE Intern Experience",
    summary: "Coding + behavioral rounds. Focus on problem solving and coding optimizations.",
    date: "Oct 25, 2025",
  },
];

const mentors = [
  { id: 1, name: "Rohit Kumar", company: "Google", role: "SWE", years: "2022 batch" },
  { id: 2, name: "Priya Sharma", company: "Microsoft", role: "SDE", years: "2021 batch" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome back, <span className="text-primary">{mockUser.name.split(" ")[0]}</span>
            </h1>
            <p className="text-gray-600 mt-1">Ready to take the next step in your placement prep?</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="inline-flex items-center gap-3 bg-white border rounded-lg px-4 py-2 shadow"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                {mockUser.name.split(" ").map(n => n[0]).slice(0,2).join("")}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-800">{mockUser.name}</div>
                <div className="text-xs text-gray-500">
                  {mockUser.branch} • Batch {mockUser.batch}
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left column: Quick actions + Recent experiences */}
          <div className="lg:col-span-2 space-y-6">

            {/* Quick Action Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {quickActions.map((q) => (
                <Link
                  key={q.title}
                  to={q.to}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{q.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{q.desc}</p>
                    </div>
                    <div className="text-primary font-bold">➜</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Recent Experiences */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Recent Interview Experiences</h3>
                <Link to="/experiences" className="text-primary text-sm font-medium">See all</Link>
              </div>

              <div className="space-y-4">
                {recentExperiences.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-lg border hover:shadow-md transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-gray-500">{exp.date} • {exp.company}</div>
                        <h4 className="text-lg font-medium text-gray-800 mt-1">{exp.title}</h4>
                        <div className="text-sm text-gray-600 mt-2">{exp.summary}</div>
                        <div className="text-xs text-gray-500 mt-2">Author: {exp.author}</div>
                      </div>
                      <div className="ml-4">
                        <Link
                          to={`/experiences/${exp.id}`}
                          className="text-primary text-sm font-medium px-3 py-2 border rounded-lg"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended mentors */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Recommended Mentors</h3>
                <Link to="/mentors" className="text-primary text-sm font-medium">Browse</Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {mentors.map((m) => (
                  <div key={m.id} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {m.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{m.name}</div>
                      <div className="text-sm text-gray-500">{m.company} • {m.role}</div>
                      <div className="text-xs text-gray-400">{m.years}</div>
                    </div>
                    <div>
                      <Link to={`/mentors/${m.id}`} className="px-3 py-1 bg-primary text-white rounded-lg text-sm">
                        Connect
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Right column: Profile summary & stats */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-primary text-white mx-auto flex items-center justify-center text-2xl font-bold">
                {mockUser.name.split(" ").map(n => n[0]).slice(0,2).join("")}
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">{mockUser.name}</h4>
              <div className="text-sm text-gray-500">{mockUser.branch} • Batch {mockUser.batch}</div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div>Applied Companies</div>
                  <div className="font-medium text-gray-800">6</div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div>Mock Interviews</div>
                  <div className="font-medium text-gray-800">3</div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div>Saved Experiences</div>
                  <div className="font-medium text-gray-800">5</div>
                </div>
              </div>

              <Link to="/profile" className="mt-4 inline-block w-full bg-primary text-white py-2 rounded-lg">
                View Profile
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h5 className="text-sm font-medium text-gray-800">Quick Tip</h5>
              <p className="text-sm text-gray-600 mt-2">
                Focus on strengthening Data Structures fundamentals — practice 3 graph problems this week.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
