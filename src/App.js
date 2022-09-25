import React from 'react'
import './index.css';
import MovingContainer from './components/MovingContainer';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import SpecialServiceSection from './components/SpecialServiceSection';
import ProcessSection from './components/ProcessSection';
import ReferenceSection from './components/ReferenceSection';
import FounderSection from './components/FounderSection';
import FormSection from './components/FormSection';


const App = () => {


  return (
    <main>
      <MovingContainer />
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
      <SpecialServiceSection />
      <ProcessSection />
      <ReferenceSection />
      <FounderSection />
      <FormSection />
    </main>
  )
}

export default App