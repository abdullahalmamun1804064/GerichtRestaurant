import React from 'react';
import Button from "../../components/Button/Button";
import MenuItem from '../../components/Menuitem/MenuItem';
import SubHeading from '../../components/SubHeading/SubHeading';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__spacial-manu  ' id='menu'>
    <div className="spacial-manu-title">
      <SubHeading title="Menu that fits you palatte" />
      <p className="headtext__cormorant">Today’s Special</p>
    </div>
    <div className="app__spacialMenu-menu">
      <div className="app__spacialMenu-menu-wine ">
      <p className="app__spacialMenu-menu-wine-title ">Wine & Beer </p>
      <div className="app__spacialMenu-menu-item">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine + index} title={wine.title} price={wine.price} tag={ wine.tags}/>
          ))}
      </div>
      </div>
      <div className="app__spacialMenu-menu-img">
        <img src={images.menu} alt="ManuImage"/>
      </div>
        <div className="app__spacialMenu-menu-cocktails ">
      <p className="app__spacialMenu-menu-cocktails-title ">Cocktails </p>
      <div className="app__spacialMenu-menu-item">
          {data.cocktails.map((wine, index) => (
            <MenuItem key={wine + index} title={wine.title} price={wine.price} tag={ wine.tags}/>
          ))}
      </div>
      </div>
    </div>
    <div className="app__spacialMenu-menu-button">
      <Button title="View More" link="#" />
    </div>
    
  </div>
);

export default SpecialMenu;
