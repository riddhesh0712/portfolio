import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

export const Education = () => {
  return (
    <section id="education-area" className="py-20 bg-secondary-30">
      <div className="container mx-auto px-4 text-white ">
        <div className="text-center mb-12">
            <h2 className="text-5xl font-bold">Education</h2>
        </div>
        <div className="relative flex flex-col justify-center items-center">
            {/* Circle Start */}
            <div className='flex justify-center items-center  rounded-full bg-secondary-30 z-10 mb-16 p-4 border-4 border-thirtary-10 text-thirtary-10 shadow-inner shadow-[#95D5B2] '>
              <FaGraduationCap size={40} />
            </div>
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-thirtary-10"></div>
            <div className="space-y-16 text-thirtary-10">
                {/* Single Education Start */}
                <div className="relative flex items-center">
                    
                    <div className="bg-primary-60 shadow-md shadow-[#95D5B2] p-6 rounded-lg ml-8 w-full md:w-1/2 md:ml-16">
                        <h2 className="text-xl font-semibold">Bachelor Degree</h2>
                        <p>JAN 2009 - MAY 2010 | <span className="font-bold">Daffodil University</span></p>
                        <p className="mt-4 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                        </p>
                    </div>
                </div>
                {/* Single Education End */}
                {/* Single Education Start */}
                <div className="relative flex items-center justify-end">
                    
                    <div className="bg-primary-60 shadow-md p-6 shadow-[#95D5B2]  rounded-lg mr-8 w-full md:w-1/2 md:mr-16">
                        <h2 className="text-xl font-semibold">Master Degree</h2>
                        <p>FEB 2011 - MAR 2012 | <span className="font-bold">Amrder University</span></p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                        </p>
                    </div>
                </div>
                {/* Single Education End */}
                {/* Single Education Start */}
                <div className="relative flex items-center">
                    
                    <div className="bg-primary-60 shadow-md shadow-[#95D5B2]  p-6 rounded-lg ml-8 w-full md:w-1/2 md:ml-16">
                        <h2 className="text-xl font-semibold">UX Designer Course</h2>
                        <p>JUN 2012 - MAY 2013 | <span className="font-bold">Crafty University</span></p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                        </p>
                    </div>
                </div>
                {/* Single Education End */}
                {/* Single Education Start */}
                <div className="relative flex items-center justify-end">
                   
                    <div className="bg-primary-60 shadow-md shadow-[#95D5B2]  p-6 rounded-lg mr-8 w-full md:w-1/2 md:mr-16">
                        <h2 className="text-xl font-semibold">Interface Designing</h2>
                        <p>AUG 2014 - JUN 2015 | <span className="font-bold">KHELTAM NA University</span></p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim.
                        </p>
                    </div>
                </div>
                {/* Single Education End */}
            </div>
        </div>
      </div>
    </section>
  )
}
