import React from 'react'
import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import EyeEffect from './components/EyeEffect'
import FeacturePro from './components/FeacturePro'
import Cards from './components/Cards'
import EyeEffectProj from './components/EyeEffectProj'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='main m-0 p-0 bg-[#F1F1F1] w-full h-full'>

      <Navigation />

      <LandingPage />
      <Marquee />
      <About />
      <EyeEffect />
      <FeacturePro />
      <Cards />
      <EyeEffectProj />
      <Footer />
    </div>
  )
}

export default App