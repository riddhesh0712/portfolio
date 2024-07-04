import React, {useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import aa from '../img/aa.jpg'
import aa2 from '../img/aa2.jpg'
import aa3 from '../img/aa3.jpg'
import aa4 from '../img/aa4.jpg'
import { Reveal } from '../Animation/Reveal.tsx'

export const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aa, aa2, aa3, aa4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          console.log("000");
          return 0;
        } else {
          console.log("111");
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  
  
  return (
    <section className='relative top-0 left-0 h-dvh '> 
      <div className="absolute w-full h-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-${index}`}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
    <div className='absolute w-full h-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-col h-full justify-center items-start p-12 md:px-28 bg-secondary-30 bg-opacity-75 text-white'>
        <Reveal>
          <h1 className='text-7xl md:text-8xl font-bold mb-5'>Hello!</h1>
        </Reveal>
        <Reveal>
          <h2 className='text-6xl font-semibold'>I'm Riddhesh</h2>
        </Reveal>
        <Reveal>
          <p className='text-3xl'>Fullstack Developer</p>
        </Reveal>
        
        
      </div>
    </div>
      
    </section>
    
  )
}   

