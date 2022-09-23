import React from 'react'
import './index.css';
import MovingContainer from './components/MovingContainer';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import SpecialServiceSection from './components/SpecialServiceSection';


const App = () => {


  return (
    <main>
      <MovingContainer />
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
      <SpecialServiceSection />
    </main>
  )
}

export default App