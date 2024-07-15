import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-title">Shamsiddin Norov</span>
      <p>Copyright @2021. All Rights Reserved.</p>
      <div className="header-menu-contact">
        <a className="header-menu-call" href="Tel:+998940337212">
          <FaPhoneAlt />
        </a>
        <a className="header-menu-telegram" href="https://t.me/shamsiddin_1101">
          <FaTelegramPlane />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
