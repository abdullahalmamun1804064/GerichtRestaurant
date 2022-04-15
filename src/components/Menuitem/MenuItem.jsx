import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tag }) => (
  <div className="app__menu-itme">
    <div className="app__menu-itme-head">
      <div className="menu__item-name">
        <p className="p__cormorant"> {title}</p>
      </div>
      <div className="menu-item-desh" />

      <div className="menu__item-price">
        <p className="p__cormorant"> {price}</p>
      </div>
    </div>

    <div className="menu__item-tag">
      <p> {tag}</p>
    </div>


  </div>
);

export default MenuItem;
