import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { Reveal } from '../Animation/Reveal.tsx'
import { RevealRight } from '../Animation/RevealRight.tsx';
import { RevealLeft } from '../Animation/RevealLeft.tsx';
import { RevealTop } from '../Animation/RevealTop.tsx'

export const Education = () => {
  return (
    <section id="education-area" className="p bg-secondary-30">
        <div className="text-primary-60 min-h-screen flex flex-col items-center py-12 px-10">
            <Reveal>
                <h1 className="text-4xl font-bold mb-12">Education</h1>
            </Reveal>
            
            <div className="relative w-full max-w-4xl">
                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-teal-400" />
                
                <div className="flex items-center mb-12 mt-10">
                    
                    <div className="w-1/2 text-right pr-8">
                        <RevealLeft>
                            <h2 className="text-2xl font-bold">GRAPHICS DESIGNER</h2>
                            <p>
                                JAN 2009 - MAY 2010 | <span className="font-bold">CREATIVE ALIEN</span>
                            </p>
                        </RevealLeft>   
                    </div>
                    <div className="relative">
                        <RevealTop>
                            <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                                <FaGraduationCap size={40} className="text-gray-900 w-6 h-6" />
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-12 w-4 h-4 bg-teal-400 rounded-full" />
                        </RevealTop> 
                    </div>
                    <div className="w-1/2 pl-8">
                        <RevealRight>
                            <p className='text-sm md:text-lg'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper
                                turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                            </p>
                        </RevealRight>
                    </div>
                </div>
                <div className="flex items-center mb-12">
                    <div className="w-1/2 text-right pr-8">
                        <RevealLeft>
                            <p className='text-sm md:text-lg'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper
                                turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                            </p>
                        </RevealLeft>
                    </div>
                    <div className="relative">
                        <RevealTop>
                            <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                                <FaGraduationCap size={40} className="text-gray-900 w-6 h-6" />          
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-12 w-4 h-4 bg-teal-400 rounded-full" />
                        </RevealTop> 
                    </div>
                    <div className="w-1/2 pl-8">
                        <RevealRight>
                            <h2 className="text-2xl font-bold">INTERACTION DESIGNER</h2>
                            <p>CRAFTY DESIGNS | FEB 2011 - MAR 2012</p>
                        </RevealRight>
                    </div>
                </div>

                <div className="flex items-center mb-12">
                    <div className="w-1/2 text-right pr-8">
                        <RevealLeft>
                            <h2 className="text-2xl font-bold">GRAPHICS DESIGNER</h2>
                            <p>
                                JAN 2009 - MAY 2010 | <span className="font-bold">CREATIVE ALIEN</span>
                            </p>
                        </RevealLeft>
                    </div>
                    <div className="relative">
                        <RevealTop>
                            <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                                <FaGraduationCap size={40} className="text-gray-900 w-6 h-6" />
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-12 w-4 h-4 bg-teal-400 rounded-full" />
                        </RevealTop>
                    </div>
                    <div className="w-1/2 pl-8">
                        <RevealRight>
                            <p className='text-sm md:text-lg'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper
                                turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                            </p>
                        </RevealRight>
                    </div>
                </div>

                <div className="flex items-center mb-12">
                    <div className="w-1/2 text-right pr-8">
                        <RevealLeft>
                            <p className='text-sm md:text-lg'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper
                                turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                            </p>
                        </RevealLeft>
                    </div>
                    <div className="relative">
                        <RevealTop>
                            <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                                <FaGraduationCap size={40} className="text-gray-900 w-6 h-6" />          
                            </div>
                        </RevealTop>
                        {/* <div className="absolute left-1/2 transform -translate-x-1/2 mt-12 w-4 h-4 bg-teal-400 rounded-full" /> */}
                    </div>
                    <div className="w-1/2 pl-8">
                        <RevealRight>
                            <h2 className="text-2xl font-bold">INTERACTION DESIGNER</h2>
                            <p>CRAFTY DESIGNS | FEB 2011 - MAR 2012</p>
                        </RevealRight>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center p-10 text-primary-60'>
            <Reveal>
                <h1 className='text-5xl font-bold'>Skills</h1>
            </Reveal> 
        </div>
    </section>
  )
}
