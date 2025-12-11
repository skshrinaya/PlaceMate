import React, { useState } from "react";
import { FaSearch, FaBriefcase } from "react-icons/fa";

const alumniData = [
  {
    id: 1,
    name: "Aarav Mehta",
    company: "Google",
    role: "Software Engineer",
    year: "2024",
    domain: "SDE",
    linkedIn: "#",
  },
  {
    id: 2,
    name: "Riya Sharma",
    company: "Deloitte",
    role: "Data Analyst",
    year: "2023",
    domain: "Data Science",
    linkedIn: "#",
  },
  {
    id: 3,
    name: "Karthik Rao",
    company: "PwC",
    role: "Cybersecurity Analyst",
    year: "2023",
    domain: "Cybersecurity",
    linkedIn: "#",
  },
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch = alumni.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || alumni.domain === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-[#6c63ff] mb-6">
        Alumni Directory
      </h1>

      {/* Search + Filter Section */}
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Bar */}
        <div className="flex items-center bg-white shadow-md rounded-lg px-4 w-full">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search alumni..."
            className="w-full px-2 py-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter */}
        <select
          className="bg-white shadow-md rounded-lg px-4 py-3 outline-none border border-gray-200"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>SDE</option>
          <option>Data Science</option>
          <option>Cybersecurity</option>
          <option>Core</option>
        </select>
      </div>

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredAlumni.map((alumni) => (
          <div
            key={alumni.id}
            className="bg-white p-5 rounded-xl shadow-md border-t-4 border-[#6c63ff] hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{alumni.name}</h2>

            <div className="mt-2 text-gray-600 flex items-center gap-2">
              <FaBriefcase className="text-[#6c63ff]" />
              <span>{alumni.role} @ {alumni.company}</span>
            </div>

            <p className="text-sm mt-2 text-gray-500">Batch: {alumni.year}</p>
            <p className="text-sm text-gray-500 mb-4">Domain: {alumni.domain}</p>

            <a
              href={alumni.linkedIn}
              className="px-4 py-2 bg-[#6c63ff] text-white rounded-lg text-sm hover:bg-[#5a54e0] transition"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectory;
