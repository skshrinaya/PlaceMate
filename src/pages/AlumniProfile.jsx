import React from "react";
import { FaLinkedin, FaEnvelope, FaBuilding, FaUserGraduate } from "react-icons/fa";

const AlumniProfile = () => {
  // Dummy profile data (later you can fetch from backend)
  const alumni = {
    name: "Aarav Mehta",
    batch: "2024",
    role: "Software Engineer",
    company: "Google",
    email: "aarav.mehta@example.com",
    linkedIn: "#",
    domain: "SDE",
    bio: "I am a passionate Software Engineer working in scalable backend systems. I love mentoring juniors, solving DSA problems, and contributing to open-source.",
    skills: ["React", "Node.js", "MongoDB", "Docker", "System Design"],
    experience: [
      {
        company: "Google",
        position: "Software Engineer",
        duration: "2024 - Present",
        description: "Working on backend services for Google Cloud using Go and Kubernetes.",
      },
      {
        company: "Amazon",
        position: "SDE Intern",
        duration: "2023",
        description: "Worked on improving API performance by 30%.",
      },
    ],
    image: "https://i.pravatar.cc/200?img=12",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={alumni.image}
            alt="Alumni"
            className="w-36 h-36 rounded-full border-4 border-[#6c63ff] shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">{alumni.name}</h1>
          <p className="text-[#6c63ff] font-semibold">{alumni.role} @ {alumni.company}</p>
          <p className="text-gray-500 text-sm">Batch of {alumni.batch} — {alumni.domain}</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href={alumni.linkedIn} className="text-[#6c63ff] text-2xl hover:text-[#5a54e0]">
              <FaLinkedin />
            </a>
            <a href={`mailto:${alumni.email}`} className="text-[#6c63ff] text-2xl hover:text-[#5a54e0]">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#6c63ff] mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">{alumni.bio}</p>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#6c63ff] mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {alumni.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-[#6c63ff] text-white rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#6c63ff] mb-2">Experience</h2>

          {alumni.experience.map((exp, index) => (
            <div
              key={index}
              className="mt-4 bg-gray-50 p-4 rounded-xl shadow-sm border-l-4 border-[#6c63ff]"
            >
              <div className="flex items-center gap-2 text-gray-800">
                <FaBuilding className="text-[#6c63ff]" />
                <h3 className="text-lg font-semibold">{exp.company}</h3>
              </div>
              <p className="text-gray-600">{exp.position}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AlumniProfile;
