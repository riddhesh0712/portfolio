import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    imageUrl: 'https://via.placeholder.com/150',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    imageUrl: 'https://via.placeholder.com/150',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    imageUrl: 'https://via.placeholder.com/150',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Head',
    imageUrl: 'https://via.placeholder.com/150',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
];

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-teal-500 text-white flex flex-col items-center py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">About Us</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12">
        Welcome to our company! We are dedicated to providing the best services and products to our customers.
        Our team of experts works tirelessly to innovate and improve our offerings.
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white text-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <img className="w-32 h-32 object-cover rounded-full mb-4" src={member.imageUrl} alt={member.name} />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex space-x-4">
              <a href={member.linkedin} className="text-teal-500 hover:text-teal-700 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href={member.twitter} className="text-teal-500 hover:text-teal-700 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href={member.github} className="text-teal-500 hover:text-teal-700 transition duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg md:text-xl">
          Our mission is to empower businesses and individuals by providing top-notch solutions that meet their needs.
          We strive to innovate and lead the market with our cutting-edge products and services.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;