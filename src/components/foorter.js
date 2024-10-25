// src/components/Footer.js
import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
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
              <Link to="/experiences">Experiences</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/consultation">Request Consultation</Link>
            </li>
            <li>
              <Link to="/policies">Policies</Link>
            </li>
            <li>
              <Link to="/code-of-ethics">Code of Ethics</Link>
            </li>
            <li>
              <Link to="/non-discrimination">Non-Discrimination Policy</Link>
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
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/queerluxetravel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/queerluxetravel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Queer Luxe Travel. All rights reserved.</p>
        <p>
          Queer Luxe Travel is an independent affiliate of Fora Travel, Inc.,
          registered as a Seller of Travel in California (Reg. #2151995-50),
          Florida (Reg. #ST43973), and Washington (UBI #605329242).
        </p>
      </div>
    </footer>
  )
}

export default Footer