import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__logo">
        <Link to="/" className="p__opensans">
          <img src={images.gericht} alt="gericht" />
        </Link>
      </div>
      <ul className="app__manu">
        <li>
          <Link to="/" className="p__opensans">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="p__opensans">
            About
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="p__opensans">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/blog" className="p__opensans">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/landing" className="p__opensans">
            Landing
          </Link>
        </li>
      </ul>
      <div className="app__logingManue">
        <Link to="/login" className="p__opensans">
          Log In / Registration
        </Link>
        <div />
        <Link to="/booktable" className="p__opensans">
          Book Table
        </Link>
      </div>

      <div className="app__smallScreenDevice">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__smallScreenOverly flexCenter slideBottom  ">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__smallScreenManu">
              <li>
                {" "}
                <Link
                  to="/login"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Log In / Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus/"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/landing/"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Landing
                </Link>
              </li>
              <li>
                <Link
                  to="/booktable"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  {" "}
                  Book Table
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
