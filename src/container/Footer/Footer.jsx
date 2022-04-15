import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import Newsletter from '../../components/Footer/Newsletter';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer'>
    <div className="app__footer__newsLetter">
      <Newsletter/>
    </div>

    <div className="app__footer-links app__bg">
      <div className="app__footer-links-contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links-icons">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="Footer img" />
        <div className="footer-icon">
          <FiFacebook className='facebook-icon' />
          <FiTwitter className='twitter-icon' />
          <FiInstagram className='instragram-icon'/>
        </div>
      </div>
      <div className="app__footer-links-work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="app__footer-copyright app__bg">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
