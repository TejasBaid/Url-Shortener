import React , {useState} from "react";
import "./Header.scss";
import {MobileNav} from '../mobile-nav/MobileNav'
import { FaBars } from "react-icons/fa";

export const Header = () => {
    const [hidden , setHidden] = useState("hid mobile-nav-container")
    const switchHidden = () => {
        hidden === "hid mobile-nav-container"
        ? setHidden("mobile-nav-container")
        : setHidden("hid mobile-nav-container")
    }    
  return (
    <div className="div">
        <div className="header">
      <div className="header-left">
        <div className="logo">Shortly</div>
        <div className="links">
          <p className="link">Features</p>
          <p className="link">Pricing</p>
          <p className="link">Resources</p>
        </div>
      </div>
      <div className="header-right">
        <div className="login-button">Login</div>
        <div className="signup-button">Sign Up</div>
        <div className="mobile-dropdown">
          <FaBars className="fa" onClick={() => switchHidden()} />
        </div>
      </div>
      
    </div>
    <div className={hidden}>
        <MobileNav />
    </div>
    </div>
  );
};
