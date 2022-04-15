import React from 'react';
import { images } from '../../constants';
import "./Subheader.css";
const SubHeading = ({title}) => (
  <div>
    <p className="subhedding">Chase the new Flavour</p>
    <img src={images.spoon} alt="spoon" className="spoon__img"/>
  </div>
);

export default SubHeading;
