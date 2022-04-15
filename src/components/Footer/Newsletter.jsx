import React from 'react';
import Button from '../../components/Button/Button';
import SubHedding from '../../components/SubHeading/SubHeading';
import './Newsletter.css';


const Newsletter = () => (
  <div className='app_newsletter app__bg'>
    <div className="app_newsletter-subscribe">
    <div className="app_newsletter-subscribe-contant">
      <SubHedding title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app_newsletter-subscribe-email">
      <input type="text" placeholder='Email Address' />
      <Button title="Subscribe" link="#"/>
    </div></div>
  </div>
);

export default Newsletter;
 