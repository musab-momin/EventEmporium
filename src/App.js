import React from 'react'
import './index.css';
import MovingContainer from './components/MovingContainer';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';


const App = () => {


  return (
    <main>
      <MovingContainer />
      <HeaderSection />
      <AboutSection />
    </main>
  )
}

export default App