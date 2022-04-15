import React, { useRef } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram
} from "react-icons/bs";
import Button from "../../components/Button//Button";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const gallaryImage = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallary app__bg flex__center">
      <div className="gallary-content">
        <SubHeading title="Instagram" />
        <p className="headtext__cormorant  gallary-content-title">
          Photo Gallery
        </p>
        <p className="p__opensans  gallary-content-dtails">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <Button title="View More" link="#"  />
      </div>
      <div className="gallary-image-card">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallaryImage.map((image, index) => (
            <div
              className="gallary-image flex__center"
              key={`image-${index + 1}`}
            >
              <img src={image} alt="galaryImage"  className="gallary-image-img"/>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
 
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort
          className="gallery__arrow-icon"
          onClick={() => scroll("left")}
        />
        <BsArrowRightShort
          className="gallery__arrow-icon"
          onClick={() => scroll("right")}
        />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
