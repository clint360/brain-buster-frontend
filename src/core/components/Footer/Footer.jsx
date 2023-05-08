import React from 'react';
import './footer.css';
import Logo from '../../../assets/images/Button.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__1container">
          <div className="footer__logo">
            <div className="footer__logo_inner">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="footer__menu">
            <h1>Menu</h1>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__service" id="service">
            <h1>SERVICE</h1>
            <ul>
              <li>Planning</li>
              <li>Management</li>
              <li>Strategy</li>
              <li>Market</li>
            </ul>
          </div>
          <div className="footer__conected">
            <h1>Lets stay connected</h1>
            <p>Enter your email to recieve update</p>
            <p>About our Services</p>

            <div className="footer_inputf">
              <input type="text" placeholder="enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer__2container">
          <div className="icon">ss</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
