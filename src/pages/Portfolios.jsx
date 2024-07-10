import React from 'react'
import { Reveal } from '../Animation/Reveal.tsx'
import Navbar from '../Template/Navbar.jsx'
import Footer from '../Template/Footer.jsx'
import Portfolio from '../Template/MyPortfolio.jsx'
import aa from '../Assests/img/aa.jpg'

export const Portfolios = () => {
  return (
    <div>
        <Navbar />
        <div>
            <div className="relative h-[50vh] bg-cover bg-center px-20 py-36" style={{ backgroundImage: `url(${aa})` }}>
                <div className='absolute inset-0 w-full h-full bg-secondary-30 bg-opacity-75 '></div>
                <div className='absolute p-10 z-10'>
                    <Reveal>
                        <h1 className='text-6xl font-extrabold text-white '>Portfolios</h1>
                    </Reveal>
                </div>
            </div>
            <div>
                <Portfolio />
            </div>
        </div>
        <Footer />
    </div>
  )
}
export default Portfolios;