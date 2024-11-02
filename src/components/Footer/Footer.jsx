import React from 'react'
import logo from '../Assets/logo.png'
import instagram from '../Assets/insta.png'
import wa from '../Assets/wa.png'
import pin from '../Assets/pin.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={wa} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pin} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Reserved</p>
        </div>
    </div>
  )
}

export default Footer