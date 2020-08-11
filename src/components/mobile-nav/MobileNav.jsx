import React from 'react'
import './MobileNav.scss'

export const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <div className="links-mobile">
                <p className="link-mobile">Features</p>
                <p className="link-mobile">Pricing</p>
                <p className="link-mobile">Resources</p>
                <div className="strike"></div>
                <div className="button">
                <div className="login-button-mobile">Login</div>
                <div className="signup-button-mobile">Sign Up</div>
                </div>
            </div>
            
        </div>
    )
}
