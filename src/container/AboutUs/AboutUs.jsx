import React from "react";
import { Button } from "../../components/Button/Button";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__about_us flex__center  app__bg" id="about">
    <div className="app__absulate_overly flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app_absulate_content">
      <div className="about_us ">
        <div className="about_title"> About Us </div>
        <img src={images.spoon} alt="spoon" className="about_us_image" />
        <p className="p_style">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <Button title="Know More" link="#" className="about_us_button" />
      </div>

      <div className="image_section">
        <img src={images.knife} alt="" />
      </div>
      <div className="histoary">
        <div className="about_title">History </div>
        <img src={images.spoon} alt="spoon" className="history_image" />
        <p className="p_style">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <Button title="Know More" link="#" className="history_button" />
      </div>
    </div>

  </div>
);

export default AboutUs;
