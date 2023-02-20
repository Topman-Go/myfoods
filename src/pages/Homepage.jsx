import React from 'react'
import Services from '../component/Services'
import About from '../component/About'
import Heading from '../component/Heading'
import Food from '../component/Food'
import Ourchef from '../component/Ourchef'
import Combo from '../component/Combo'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Homepage = () => {
  return (
    <div>
      
        <Heading />
        <Food />
        <Services />
        <About />
        <Ourchef />
        <Combo />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage