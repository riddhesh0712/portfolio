import React from 'react'
import { GrSend } from "react-icons/gr";
import { Reveal } from '../Animation/Reveal.tsx'

export const HireMe = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center py-16 md:p-24 bg-primary-60 text-white'>
        <div className='flex justify-center items-center p-6 rounded-full bg-thirtary-10 text-white'>
            <GrSend size={40} />
        </div>
        <div className='max-w-[70%] p-4 text-center'>
            <Reveal>
            <h1 className='text-4xl font-bold text-thirtary-10 bg-gradient-to-r from-secondary-30 to-thirtary-10 text-transparent bg-clip-text'>HIRE ME FOR YOUR AWSOME PROJECT</h1>
            </Reveal>
            <Reveal>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam esse expedita aliquam dolorem officia fuga, doloribus sapiente hic accusamus optio quo maiores sit.</p>
            </Reveal>
        </div>
        <div className='flex justify-center items-center'>
          <Reveal>
          <button className='py-3 px-4 border-2 border-thirtary-10 hover:bg-gradient-to-r from-secondary-30 to-thirtary-10 transition-all duration-300 ease-in-out'>HIRE ME</button>
            </Reveal>              
        </div>
    </div>
  )
}
export default HireMe;