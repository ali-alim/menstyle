import React from 'react';
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            About info
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Contact Info
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Menstyle</span>
          <span className="copyright">
            @ Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right"/>
      </div>
    </div>
  );
};

export default Footer
