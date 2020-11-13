import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/homepage/whiteLogo.svg';

const HeaderResume = () => {
    const [navLinkOpen, navLinkToggle] = useState(false);
    
    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    }

    const renderClasses = () => {
        let classes = "navlinkresume";
        if (navLinkOpen) {
            classes += " active"
        }
        return classes
    }

    return (
        <div className="nav">
            <div className="whitelogo">
                <Link to='/'>
                    <img src={logo} className="ihs-whitelogo"></img>
                </Link>
            </div>
            <ul className={renderClasses()}>
                <li>
                    <Link to='/' className="links">HOME</Link>
                </li>
                <li>
                    <Link to='/about' className="links">ABOUT US</Link>
                </li>
                <li>
                    <Link to='/advisory' className="links">ADVISORY</Link>
                </li>
            </ul>
            <div onClick={handleNavLinksToggle} className="hamburger-Toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>

        </div>
    )
}

export default HeaderResume;