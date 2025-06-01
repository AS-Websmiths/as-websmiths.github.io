import React from 'react'
import Navbar from '../assets/navbar/Navbar'
import "./css/Home.css"
import SemiOval from '../assets/SemiOval/SemiOval'
import RotatingRing from '../assets/RotatingIcons/RotatingRing'
const App = () => {
  return (
    <>
      <Navbar />
      <div className="rotating-wrapper">
        <RotatingRing />
        <div className="hero-section">
          <h2>quality websites built</h2>
          <h5>at no cost to you</h5>
        </div>
      </div>
      <SemiOval />

    </>
  )
}

export default App