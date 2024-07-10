import React from 'react'
import { Button } from '../Template/Button';

export const ContactMe = () => {
  return (
    <section id='contactme-area' className='flex flex-col justify-center p-16 md:p-28 bg-secondary-30'>
        <div>
             <div className='flex flex-col md:flex-row justify-around'>
                <div class="wrap-input-1 relative w-full md:w-1/2 my-10 mx-3">
                    <input class="input w-full border-0 border-b border-white py-2 bg-secondary-30 focus:outline-none focus:border-transparent focus:ring-0 text-white placeholder:text-white" type="text" placeholder="Name"/>
                    <span class="focus-border absolute bottom-0 left-0 h-1 w-0 bg-primary-60 transition-all duration-400"></span>
                </div>

                <div class="wrap-input-1 relative w-full md:w-1/2 my-10 mx-3">
                    <input class="input w-full border-0 border-b border-white py-2 bg-secondary-30 focus:outline-none focus:border-transparent focus:ring-0 text-white placeholder:text-white" type="email" placeholder="Email"/>
                    <span class="focus-border absolute bottom-0 left-0 h-1 w-0 bg-primary-60 transition-all duration-400"></span>
                </div>
            </div>
            
            <div className='flex justify-center'>
                <div class="wrap-input-1 relative w-full my-10 mx-3">
                    <textarea class="input w-full border-0 border-b border-white py-2 bg-secondary-30  focus:outline-none focus:border-transparent focus:ring-0 text-white placeholder:text-white" type="email" rows={8} placeholder="Email"/>
                    <span class="focus-border absolute bottom-0 left-0 h-1 w-0 bg-primary-60 transition-all duration-400"></span>
                </div>
                
            </div>
            <div className='flex justify-center items-center mt-10'>
                <Button first = "Send" second = "Message"/>
            </div>
            
        </div>
    </section>
  )
}
export default ContactMe;