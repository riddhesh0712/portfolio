import React from 'react'
import profilePic from '../img/profile.jpg';
export const Aboutus = () => {
  return (
    
      <div className='md:flex justify-center items-center px-20 py-28 h-screen bg-slate-700'>
        <div className='z-10 flex-1 justify-center items-center p-4 h-full'>
          <div className='relative h-full p-10'>
            <div className='absolute z-10 top-10 left-0  max-h-80 h-64 md:h-96 w-64 md:w-80 max-w-96'>
              <img src={profilePic} alt="" />
            </div>
            <div className='absolute -z-10 top-0 left-10 max-h-96 h-64 md:h-80 w-64 md:w-80 max-w-96 border-2 border-solid border-black  '>
        
            </div>
          </div>
          {/* <div className=' md:mt-24 flex justify-center items-center'>
            <button className='py-4 px-6 border-2 border-black hover:bg-[#1eb662]   '>Download Resume</button>
          </div> */}
        </div>
        <div className='flex-1'>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio voluptate quas maiores eum sint facere eos, tenetur quae autem quasi totam molestias. Animi, quas quidem saepe ad alias vero, aperiam aut rerum unde iusto cupiditate dicta facere optio quibusdam vel itaque error ipsam? Consectetur, tempore pariatur. Id culpa maxime sequi rem ipsum alias impedit quidem earum? Voluptates, quae veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo id delectus doloribus asperiores cupiditate maiores molestiae ipsum dignissimos atque aperiam!</p>
        </div>

        {/* <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between bg-[#22252C] text-white py-16 px-8 md:px-20">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl mb-6">
          Hi, I'm Riddhesh, a passionate Fullstack Developer with a knack for creating stunning web applications. 
          With a background in both frontend and backend technologies, I thrive on building efficient and scalable solutions 
          that solve real-world problems.
        </p>
        <p className="text-lg md:text-xl mb-6">
          I have a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Node.js. My journey in the tech world 
          started [number] years ago, and since then, I've been continuously honing my skills and staying up-to-date with the latest 
          industry trends.
        </p>
        <p className="text-lg md:text-xl mb-6">
          When I'm not coding, you can find me "exploring nature", "playing the cricket", etc.. I believe in lifelong learning and am always looking for new challenges to tackle.
        </p>
        <p className="text-lg md:text-xl">
          Let's create something amazing together!
        </p>
      </div>
    </section> */}
      </div>

        
    
  )
}
