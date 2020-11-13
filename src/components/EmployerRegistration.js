import React from 'react';
import { Link } from 'react-router-dom';
import HeaderRegister from './HeaderRegister';
import EmployerForm from './EmployerForm';
import FooterJobseeker from './FooterJobseeker';
import registrationEnding from '../../public/images/employer/registrationEnding.svg';

const EmployerRegistration = () => (
    <div>
        <HeaderRegister />
        <div className="jobseeker-subheader">
            <div>
                <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                <a href='/https://www.youtube.com/channel/UCvtc12PbgBboCxMd-dHNscQ/about?disable_polymer=1' className="fa"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
        <EmployerForm />
        
        <div className="employer-reg-page-last-frame-container">
            <img src={registrationEnding} className="employer-reg-page-last-frame-img"></img>
            <div className="employer-lastframe">
                <h2>For Find Your Dream Job or Candiadate</h2>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                <div className="employer-btn-flex-bottom">
                    <Link to='/jobseeker/register' className="emp-reg-link-add-resume">Add Resume</Link>
                    <p>Or</p>
                    <Link to='/employer/registration' className="emp-reg-link-postajob">Post a Job</Link>
                </div>
            </div>
        </div>
        <FooterJobseeker />
    </div>
);

export default EmployerRegistration;