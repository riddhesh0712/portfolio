import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { AboutMe } from '../Components/AboutMe'
import { Education } from '../Components/Education'
import { Skills } from '../Components/Skills'
import HireMe from '../Components/HireMe'



export const Home = () => {
  return (
    <div>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <HireMe />
    </div>
  )
}
