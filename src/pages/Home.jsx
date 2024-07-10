import React from 'react'
import { Hero } from '../Components/Hero.jsx'
import { AboutMe } from '../Components/AboutMe.jsx'
import { Education } from '../Components/Education.jsx'
import HireMe from '../Components/HireMe.jsx'
import ContactMe from '../Components/ContactMe.jsx'
import Footer from '../Template/Footer.jsx';
import SkillsComponent from '../Components/SkillsComponent.jsx'
import Portfolio from '../Components/Portfolio.jsx'


export const Home = () => {
  return (
    <div>
        <Hero />
        <AboutMe />
        <Education />
        <SkillsComponent />
        <Portfolio />
        <HireMe />
        <ContactMe />
        <Footer />
    </div>
  )
}
export default Home;