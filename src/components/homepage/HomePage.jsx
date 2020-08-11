import React from "react";
import Illustration from "../../images/homepage.svg";
import "./Homepage.scss";
import { UrlInput } from "../url-input/UrlInput";

export const HomePage = () => {
  return (
    <div className='hp'>
        <div className="homepage">
      <div className="homepage-left">
        <h1 className="homepage-title">More than just shorter links</h1>
        <p className="homepage-description">
          Build your brands recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="get-started">Get Started</div>
      </div>
      <div className="homepage-right">
        <img className="homepage-illustration" src={Illustration} alt="" />
      </div>
      <div className="homepage-left-mobile">
        <img className="homepage-illustration" src={Illustration} alt="" />
      </div>
      <div className="homepage-right-mobile">
        <h1 className="homepage-title">More than just shorter links</h1>
        <p className="homepage-description">
          Build your brands recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="get-started">Get Started</div>
      </div>
        
    </div>
    <div className="url-input-container">
            <UrlInput />
    </div>
    </div>
  );
};
