import React, { useRef, useState } from 'react'
import Features from '../Components/Features/Features'
import Landing from '../Components/Landing/Landing'
import Design from '../Components/Design/Design'
import Portfolio from '../Components/Portfolio/Portfolio'
import Quote from '../Components/Quote/Quote'
import Gallery from '../Components/Gallery/Gallery'
import Video from '../Components/Video/Video'
import Testimonials from '../Components/Testimonials/Testimonials'
import Subscribe from '../Components/Subscribe/Subscribe'
import Skills from '../Components/Skills/Skills'
import Stats from '../Components/Stats/Stats'



const Home = () => {
  const [skillsScroll , setskillsScroll] = useState(false)
  const [statsScroll , setstatsScroll] = useState(false)
  const skillsRef = useRef(null)
  const statsRef = useRef(null)
  window.onscroll =() =>{
    if(skillsRef.current && skillsRef.current.offsetTop && (window.scrollY >= skillsRef.current.offsetTop - 50)){
        setskillsScroll(true)
    }
    if(statsRef.current && statsRef.current.offsetTop && (window.scrollY >= statsRef.current.offsetTop - 250)){
      setstatsScroll(true)
  }
}
  return (
    <>
        <Landing />
        <Features />
        <Design />
        <Portfolio />
        <Quote />
        <Gallery />
        <Video />
        <Testimonials />
        <Subscribe />
        <Skills ref={skillsRef} scroll={skillsScroll}/>
        <Stats ref={statsRef} scroll={statsScroll}/>
    </>
  )
}

export default Home