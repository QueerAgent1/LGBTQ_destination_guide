import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import '../styles/header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [logoAnimation, setLogoAnimation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      if (scrollPosition > 0) {
        setLogoAnimation(true)
      } else {
        setLogoAnimation(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header>
      <div className="header-container">
        <Link to="/" className={`logo ${logoAnimation ? 'animate' : ''}`}>
          Queer Luxe Travel
        </Link>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-menu-inner">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/experiences">Experiences</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/consultation" className="cta-button">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-actions">
          <div className="search-toggle" onClick={toggleSearch}>
            <FaSearch />
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
          <div className="search-bar-inner">
            <input type="text" placeholder="Search destinations, experiences, and more..." />
            <button type="submit">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header