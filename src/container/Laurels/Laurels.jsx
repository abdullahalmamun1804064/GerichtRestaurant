import React from 'react';
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from '../../constants';
import data from '../../constants/data';
import './Laurels.css';
export const Award = ({imageUrl,title,subtitle}) => {
  return (
    <div className="award-card">
      <img src={imageUrl} alt="award" />
      <div className="award-card-content">
        <p className="p__cormorant " style={{ color: "var(--color-golden)" }}>{title}</p>
        <p className="p__opensans">{subtitle }</p>
      </div>
    </div>
  )
}


const Laurels = () => (
  <div className='app__laurels app__bg app__wrapper section__padding'>
    <div className="laurels-logo">
      <img src={images.logo} alt="logo" />
   </div>
    <div className="laurels-info">
      <SubHeading title="Awards & recognition" />
      <p className="headtext__cormorant">Our Laurels</p>
      <div className="app__laurels_awards">
        {data.awards.map((award) => <Award   imageUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} key={award.title} />)}
      </div>
    </div>
    <div className="laurels-img-secton">
      <img src={images.laurels} alt="laurels-img" className="laurels-img" />
    </div>
   </div>

);

export default Laurels;
