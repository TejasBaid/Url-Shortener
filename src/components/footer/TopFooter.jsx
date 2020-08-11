import React from 'react'
import './TopFooter.scss'
import DesktopInput from '../../images/bg-boost-desktop.svg'

export const TopFooter = () => {
    return (
        <div className="top-footer" style={{ backgroundImage: "url(" + DesktopInput + ")",}}>
            <div className="footer-center">
                <h1 className="byl">Boost your links today</h1>
                <a className="gsb" href="#"><div className="get-started-button">Get Started</div></a>
            </div>
        </div>
    )
}

