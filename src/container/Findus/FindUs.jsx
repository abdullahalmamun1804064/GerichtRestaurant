import React from 'react';
import Button from '../../components/Button/Button';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Findus.css';
const FindUs = () => (
  <div className='app__findus app__bg flex__center section__padding'>
    <div className="app__findus-contant">
      <SubHeading title="Contact" />
      <p className="headtext__cormorant app__findus-contant-title" >Find us</p>
      <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className="app__findus-contant-subtitle">Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      <div className="app__findus-contant-button">
           <Button title="View us" link ="#"/>
      </div>
   
    </div>
    <div className="app_findus-image">
      <img src={images.findus} alt="Find us" />
  </div>
  </div>
);

export default FindUs;
