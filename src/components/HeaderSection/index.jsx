import React from 'react'
import MainContent from './MainContent';
import Navbar from './Navbar';
import './styles.css';


const HeaderSection = () => {
  return (
    <header className='header'>
      <Navbar />
      <MainContent />
    </header>
  )
}

export default HeaderSection