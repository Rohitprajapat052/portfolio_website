import React from "react";
import JohnImage from "../assets/person.jpg"; // Replace with actual images
import JaneImage from "../assets/person.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Tax Consultant",
      description:
        "John is a seasoned tax consultant with over 10 years of experience in tax planning and compliance.",
      image: JohnImage,
    },
    {
      name: "Jane Smith",
      role: "Financial Advisor",
      description:
        "Jane specializes in financial planning and investment strategies to help clients achieve their goals.",
      image: JaneImage,
    },
  ];

  return (
    <div className="w-full bg-gray-100 text-gray-900 py-12">
      {/* ABOUT US Section */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900">ABOUT US</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          We are a team of tax and finance professionals dedicated to making tax filing and financial planning effortless for individuals and businesses.
        </p>
      </div>

      {/* Meet Our Team Section */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-4xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <p className="text-center text-gray-600 mt-2 text-lg">
          Experienced professionals dedicated to simplifying your tax needs.
        </p>

        {/* Team Grid - Two Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 object-cover"
              />
              <h4 className="text-2xl font-semibold text-gray-900 mt-4">{member.name}</h4>
              <p className="text-gray-600 text-lg font-medium">{member.role}</p>
              <p className="mt-2 text-gray-700 text-sm px-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
