import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FiX, FiMenu } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <h2>BEACHES.</h2>

      <ul className="nav-menu">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
      </ul>

      <div className="nav-icons">
        <BiSearch size={25} className="icon" />
        <BsPerson size={25} className="icon" />
      </div>

      <div className="icon-mobile">
        {menuClicked ? (
          <FiX size={25} onClick={toggleMenuClick} className="icon" />
        ) : (
          <FiMenu size={25} onClick={toggleMenuClick} className="icon" />
        )}
      </div>

      <div className={menuClicked ? "mobile-menu active" : "mobile-menu"}>
        <div className="mobile-menu-bottom">
          <ul className="mobile-nav">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
          </ul>

          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>

          <div className="social-icons">
            <FaFacebook size={25} className="icon" />
            <FaInstagram size={25} className="icon" />
            <FaTwitter size={25} className="icon" />
            <FaPinterest size={25} className="icon" />
            <FaYoutube size={25} className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
