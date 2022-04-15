import React from 'react';
import { Button } from '../../components/Button/Button';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Header.css';
 
const Header = () => (
  <div className='app__header sectionHeadet' id='home'  >
    <div className="app__header__info">
      <SubHeading title="Chase the new Flavour" />
      <div className="heading__info__title">The key to Fine dining</div>
      <div className="p_style p_info">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </div>
      <Button title="Explore Menu" link="#" className="header__button" /> 
    
    </div>
    <div className="app__header__img">
     <img src={images.welcome} alt="header img" className='header__img' />
    </div>
  </div>
);

export default Header;
