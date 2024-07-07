import React from 'react'
import profilePic from '../img/profile.jpg'
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { GiMusicalNotes } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

import { Reveal } from '../Animation/Reveal.tsx';
import { Button } from '../Template/Button.jsx';

import { FaPlane, FaMusic, FaCar, FaBook } from 'react-icons/fa';

const interests = [
  { name: 'Travel', icon: <FaPlane size={36} /> },
  { name: 'Music', icon: <FaMusic size={36} /> },
  { name: 'Cars', icon: <FaCar size={36} /> },
  { name: 'Reading', icon: <FaBook size={36} /> },
];


export const AboutMe = () => {
  return (
    <div className='bg-gray-900'>
      <div className='flex flex-col md:flex-row min-h-screen px-5 md:px-20 py-16 text-white'>
        <div className='flex flex-col md:flex-row w-full'>
          <div className='flex-1 flex flex-col justify-center items-center p-6'>
            <div className='relative flex justify-center items-center h-64 md:h-80 w-64 md:w-80'>
              
              <div className='absolute z-10 top-10 h-full w-full shadow-2xl shadow-thirtary-10'>
                <Reveal>
                  <img src={profilePic} alt="Profile" className='h-full w-full object-cover' />
                </Reveal>
                
              </div>
              <div className='absolute z-0 top-0 ml-10 md:ml-20 h-full w-full bg-primary-60 p-2'>
                <div className='h-full w-full bg-gray-900'></div>
              </div>
            </div>
            <div className='mt-20'>
              <Reveal>
                <Button first = "DOWNLOAD" second = "RESUME" />
              </Reveal>
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-center items-center p-6'>
            <div className='mb-10 text-center'>
              <Reveal>
                <h2 className='text-3xl md:text-5xl font-bold mb-3 text-primary-60'>
                  About Me
                </h2>
              </Reveal>
              <Reveal>
                <div className='border-2 border-thirtary-10 w-full rounded-full'></div>
              </Reveal>
            </div>
            <Reveal>
              <p className='text-lg text-justify mb-5'>
                Hi, I'm Riddhesh, a passionate Fullstack Developer with a knack for creating stunning web applications. With a background in both frontend and backend technologies, I thrive on building efficient and scalable solutions that solve real-world problems.
              </p>
            </Reveal>
            <Reveal>
              <p className='text-lg text-justify'>
                I have a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Node.js. My journey in the tech world started [number] years ago, and since then, I've been continuously honing my skills and staying up-to-date with the latest industry trends.
              </p>
            </Reveal>
            
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-60 mb-8">My Interests</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-800 text-white rounded-full p-6 shadow-lg mb-2">
                {interest.icon}
              </div>
              <span className="text-white text-lg">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
};
export default AboutMe;
