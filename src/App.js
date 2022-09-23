import React from 'react'
import './index.css';
import MovingContainer from './components/MovingContainer';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';


const App = () => {


  return (
    <main>
      <MovingContainer />
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
    </main>
  )
}

export default App