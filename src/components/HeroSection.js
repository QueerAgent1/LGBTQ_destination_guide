import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <StaticImage
        src="../images/hero-image.jpg"
        alt="Hero Image"
        layout="fullWidth"
        style={{ height: '600px' }}
      />
      <div className="hero-content">
        <h1>LGBTQ+ Destination Guide</h1>
        <p>Experience the vibrant queer culture of [Destination]</p>
      </div>
    </div>
  )
}

export default HeroSection