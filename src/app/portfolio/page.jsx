import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import MainHeader from '@/components/mainHeader/MainHeader'
import Services from '@/components/services/Services'
import Work from '@/components/work/Work'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <MainHeader/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Portfolio