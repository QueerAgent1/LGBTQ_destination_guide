import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'
import TISScripts from './TISScripts'

const Layout = ({ children }) => {
  return (
    <div>
    <TISScripts />
    {/* ... (rest of the Layout component code) */}
    </div>
  )
}

export default Layoutimport React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="header-container">
          <Link to="/" className="logo">
            Queer Luxe Travel
          </Link>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/accommodations">Accommodations</Link>
              </li>
              <li>
                <Link to="/activities">Activities</Link>
              </li>
              <li>
                <Link to="/consultation" className="cta-button">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>About</h4>
            <p>
              Queer Luxe Travel is an independent affiliate of Fora Travel, Inc.,
              dedicated to curating luxurious and transformative travel
              experiences for the LGBTQ+ community.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/accommodations">Accommodations</Link>
              </li>
              <li>
                <Link to="/activities">Activities</Link>
              </li>
              <li>
                <Link to="/consultation">Request Consultation</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect with Us</h4>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/queerluxetravel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/queerluxetravel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/queerluxetravel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Queer Luxe Travel</p>
          <p>
            Queer Luxe Travel is an independent affiliate of Fora Travel, Inc.,
            registered as a Seller of Travel in California (Reg. #2151995-50),
            Florida (Reg. #ST43973), and Washington (UBI #605329242).
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout