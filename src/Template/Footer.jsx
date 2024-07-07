import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='flex flex-col justify-center px-16 md:px-20 bg-secondary-30 text-white'>
      <div>
      <div className='px-5 py-8 text-white border-b border-primary-60'>
          <div className='flex justify-center space-x-6'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-teal-400 transition duration-300'>
              <FaFacebookF />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-teal-400 transition duration-300'>
              <FaTwitter />
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-teal-400 transition duration-300'>
              <FaLinkedinIn />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-teal-400 transition duration-300'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className='text-center py-4 md:py-10'>
        <p>RIDDHESH © 2024. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}
export default Footer;