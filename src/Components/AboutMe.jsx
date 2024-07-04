import React from 'react'
import profilePic from '../img/profile.jpg'
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { GiMusicalNotes } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import RevealOnScroll from '../API/RevealOnScroll'
import { Reveal } from '../Animation/Reveal.tsx';


export const AboutMe = () => {
  return (
    // <div className='bg-primary-60'>   
    //     <div className='flex flex-col md:flex-row h-screen px-10 py-16 md:px-20  text-white'>
    //     <div className='flex flex-col flex-row'>
    //         <div className='flex flex-1 flex-col justify-center items-center h-[100%] p-6'>
    //         <div className='relative flex justify-center items-center h-full w-full'>
    //             <div className='absolute z-10 top-10  h-64 md:h-80 max-h-96 w-64 md:w-80 max-w-96 shadow-2xl shadow-thirtary-10 '>
    //                 <img src={profilePic} alt="Profile" className='h-full w-full object-cover' />
    //             </div>
    //             <div className='absolute z-0 top-0 ml-20 h-64 md:h-80 max-h-96 w-64 md:w-80 max-w-96 bg-gradient-to-l from-thirtary-10 to-secondary-30 p-2'>
    //                 <div className='h-full w-full bg-primary-60'></div>
    //             </div>
                
    //         </div>
    //         <div className='relative flex justify-center items-center mt-10 '>
    //             <button className='py-4 px-6 mt-10 hover:bg-gradient-to-r from-secondary-30 to-thirtary-10 border-2 border-thirtary-10 transition-all ease-in-out duration-300'>Download Resume</button>
    //         </div>
    //         </div>
    //         <div className='flex-1 flex flex-col justify-center items-center  p-6'>
    //         <div className='mb-10'>
    //             <h2 className='text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-secondary-30 via to-thirtary-10'>About Me</h2>
    //             <RevealOnScroll>
    //                 <div className='border-2 border-thirtary-10 w-full rounded-full '></div>
    //             </RevealOnScroll>
    //         </div>
            
    //         <p className='text-lg text-justify mb-5'> Hi, I'm Riddhesh, a passionate Fullstack Developer with a knack for creating stunning web applications. With a background in both frontend and backend technologies, I thrive on building efficient and scalable solutions that solve real-world problems.</p>
    //         <p className='text-lg text-justify'>I have a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Node.js. My journey in the tech world started [number] years ago, and since then, I've been continuously honing my skills and staying up-to-date with the latest industry trends.</p>
    //         </div>
    //     </div>
    //     </div>
    //     <div className='px-10 py-8 md:px-40  text-white'>
    //         <div className='p-4'>
    //             <h1 className='text-4xl font-bold text-thirtary-10'>My Interests</h1>
    //         </div>
    //         <div className='flex flex-col md:flex-row justify-around items-center px-28 py-6 font-bold'>
    //             <div className='flex flex-col justify-center items-center space-y-4'> 
    //                 <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
    //                     <PiAirplaneTakeoffFill size={40} />
    //                 </div>
    //                 <span>Travel</span>
    //             </div>
    //             <div className='flex flex-col justify-center items-center space-y-4'> 
    //                 <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
    //                     <GiMusicalNotes size={40} />
                    
    //                 </div>
    //                 <span>Music</span>
    //             </div>
    //             <div className='flex flex-col justify-center items-center space-y-4'> 
    //                 <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
    //                     <IoCarSportSharp size={40} />
                    
    //                 </div>
    //                 <span>Cars</span>
    //             </div>
    //             <div className='flex flex-col justify-center items-center space-y-4'> 
    //                 <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
    //                 <FaBookReader size={40}/>
                    
    //                 </div>
    //                 <span>Reading</span>
    //             </div>
    //             <div className='flex flex-col justify-center items-center space-y-4'> 
    //                 <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
    //                 <FaBookReader size={40}/>
                    
    //                 </div>
    //                 <span>Reading</span>
    //             </div>
                
                
    //         </div>
    //     </div>
    // </div>
    <div className='bg-primary-60'>
      <div className='flex flex-col md:flex-row min-h-screen px-5 md:px-20 py-16 text-white'>
        <div className='flex flex-col md:flex-row w-full'>
          <div className='flex-1 flex flex-col justify-center items-center p-6'>
            <div className='relative flex justify-center items-center h-64 md:h-80 w-64 md:w-80'>
              
              <div className='absolute z-10 top-10 h-full w-full shadow-2xl shadow-thirtary-10'>
                <Reveal>
                  <img src={profilePic} alt="Profile" className='h-full w-full object-cover' />
                </Reveal>
                
              </div>
              <div className='absolute z-0 top-0 ml-10 md:ml-20 h-full w-full bg-gradient-to-l from-thirtary-10 to-secondary-30 p-2'>
                <div className='h-full w-full bg-primary-60'></div>
              </div>
            </div>
            <div className='mt-20'>
              <Reveal>
                <button className='py-4 px-6 hover:bg-gradient-to-r from-secondary-30 to-thirtary-10 border-2 border-thirtary-10 transition-all ease-in-out duration-300'>
                  Download Resume
                </button>
              </Reveal>
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-center items-center p-6'>
            <div className='mb-10 text-center'>
              <Reveal>
                <h2 className='text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-secondary-30 via to-thirtary-10'>
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
      <div className='px-5 md:px-40 py-8 text-white'>
        <div className='p-4 text-center'>
          <Reveal>
            <h1 className='text-3xl md:text-4xl font-bold text-thirtary-10'>My Interests</h1>
          </Reveal>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8 px-10 py-6 font-bold'>
          <Reveal>
            <div className='flex flex-col justify-center items-center space-y-4'>
              <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
                <PiAirplaneTakeoffFill size={40} />
              </div>
              <span>Travel</span>
            </div>
          </Reveal>
          
          <Reveal>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
              <GiMusicalNotes size={40} />
            </div>
            <span>Music</span>
          </div>
          </Reveal>
          <Reveal>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
              <IoCarSportSharp size={40} />
            </div>
            <span>Cars</span>
          </div>
          </Reveal>
          <Reveal>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
              <FaBookReader size={40} />
            </div>
            <span>Reading</span>
          </div>
          </Reveal>
          <Reveal>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='p-4 bg-thirtary-10 rounded-full shadow-xl shadow-thirtary-10'>
              <FaBookReader size={40} />
            </div>
            <span>Reading</span>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
    
  )
};
export default AboutMe;
