import React from "react";
import "./BottomFooter.scss";
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'

export const BottomFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="footer-logo">Shortly</div>
      <div className="footer-links">
        <div className="s1 footer-section"> 
          <p className="link-header">Features</p>
          <p className="footer-link">Link Shortening</p>
          <p className="footer-link">Branded Links</p>
          <p className="footer-link">Analytics</p>
        </div>
        <div className="s2 footer-section">
          <p className="link-header">Resources</p>
          <p className="footer-link">Blog</p>
          <p className="footer-link">Developers</p>
          <p className="footer-link">Support</p>
        </div>
        <div className="s3 footer-section">
          <p className="link-header">Resources</p>
          <p className="footer-link">About</p>
          <p className="footer-link">Our Teams</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Contact</p>
        </div>
      </div>
      <div className="social-links">
          <img className='social-link'  src={Facebook} alt=""/>
          <img className='social-link' src={Twitter} alt=""/>
          <img className='social-link' src={Pinterest} alt=""/>
          <img className='social-link' src={Instagram} alt=""/>
      </div>  
    </div>
  );
};
