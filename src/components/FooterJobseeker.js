import React from 'react';
import { Link } from 'react-router-dom';
//import bg from '../../public/images/footer/bg.svg';
import icon from '../../public/images/footer/icon.svg';


const FooterJobseeker = () => {
    return (
        <div className="footer-bg">
            <div className="footer-flex-jobseeker">
                <div className="footer-1">
                    <img src={icon}></img>
                    <p>Copyright 2020</p>
                </div>
                <div className='footer-2'>
                    <Link to='/about' className="footer-link"><i className="fas fa-caret-left"></i>About us</Link>
                </div>
                <div className='footer-2'>
                    <Link to='/contact-us' className="footer-link"><i className="fas fa-caret-left"></i>Contact us</Link>
                </div>
                <div className='footer-2'>
                    <Link to='/privacy-policy' className="footer-link"><i className="fas fa-caret-left"></i>Privacy policy</Link>
                </div>
                <div className='footer-2'>
                    <Link to='/terms' className="footer-link"><i className="fas fa-caret-left"></i>Terms & Conditions</Link>
                </div>
                <div className='footer-2'>
                    <Link to='/faq' className="footer-link"><i className="fas fa-caret-left"></i>FAQ</Link>
                </div>
            </div>
        </div>
    );
};

export default FooterJobseeker;