import React from 'react'
import './Footer.css'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="download_app">
          <h3>Download Our App</h3>
          <p>Downlaod App for andriod and ios phone</p>
          <div className="app_logo">
            <BiLogoPlayStore size={50} />
            <FaAppStoreIos size={50} />
          </div>
        </div>
        <div className="fl">
          <div className="footer_links">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer_social">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <p className="copyr">CopyRight</p>

      </div>
    </>
  );
};

export default Footer;