import React, {useState, useEffect} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { PiBehanceLogoBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import '../index.css'

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () =>{
    setNav(!nav);
  }
  return (
    <div>
        <nav className={`flex justify-between z-20 items-center w-full px-14 md:px-28 transition-all duration-700 ease-in-out ${scrolled ? 'fixed top-0 left-0 bg-gradient-to-r from-secondary-30 to-primary-60 drop-shadow-lg py-6' : 'fixed top-0 left-0 py-10'}`}>
            <div className='flex justify-center items-center space-x-6'>
                <a className="hover:cursor-pointer text-white hover:text-slate-200" href=""><FaLinkedin size={22} /></a>
                <a className="hover:cursor-pointer text-white hover:text-slate-200" href=""><FaXTwitter size={22} /></a>
                <a className="hover:cursor-pointer text-white hover:text-slate-200" href=""><FaFacebook size={22} /></a>
                <a className="hover:cursor-pointer text-white hover:text-slate-200" href=""><PiBehanceLogoBold size={22} /></a>
            </div>
            <div className='relative'>
               <div onClick={() => handleNav()} className="hover:cursor-pointer text-white hover:text-slate-200 " >
                    {!nav ? <RxHamburgerMenu size={28}/> : <IoMdClose size={28} />}
               </div>
            </div>
            <div className={nav ? 'fixed top-0 right-0 h-screen w-full py-20 bg-thirtary-10 bg-opacity-85 text-white -z-10 transition-all transform ease-in-out duration-700' : 'absolute top-0 right-[-100%] w-full  py-20 bg-thirtary-10 bg-opacity-85 text-white -z-10 transition-all transform ease-in-out duration-700'}>
                <ul>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>Home</li>
                  </a>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>About Us</li>
                  </a>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>Education</li>
                  </a>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>Skills</li>
                  </a>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>Portfolio</li>
                  </a>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>Hire Me</li>
                  </a>
                  <a href="">
                    <li className='py-6 px-10 md:px-28 hover:shadow-2xl shadow-orange-200 transition-all ease-linear'>Contact Me</li>
                  </a>
                </ul>
            </div>
        </nav>


    </div>
  )
}
