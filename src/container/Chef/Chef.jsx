import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Chef.css';
const Chef = () => (
  <div className=' app__chef app__bg  section__padding'>
    <div className="chef-image-section">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="chef-about">
      <SubHeading title="Chef’s Word" />
      <p className="headtext__cormorant">
        What we believe in
      </p>
      <div className="chef-about-qutatin">
        <div className="chef-about-qutatin-img">
          <img src={images.quote} alt="quote" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
      
        </div>
          <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="chef-sign">
        <p className="chef-name">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>

  </div> 
);

export default Chef;
