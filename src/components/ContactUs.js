import React from "react";
import { Link } from 'react-router-dom';
import HeaderContactUs from "./HeaderContactUs";
import ContactUsDetails from "./ContactUsDetails";
import FooterAboutus from "./FooterAboutus";



const ContactUs = () => {
    return (
        <div>
            <HeaderContactUs />
            
            <div className="jobseeker-subheader">
                <div>
                    <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                    <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                    <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                    <a href='/https://www.youtube.com/channel/UCvtc12PbgBboCxMd-dHNscQ/about?disable_polymer=1' className="fa"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="contact-us-touch">
                <h1>KEEP IN TOUCH</h1>
            </div>
            <div>
                <form>
                    <div className="contact-us-form">
                        <div>
                            <input type="text" placeholder="First Name" className="form-styling-contact-us" name="firstName" />
                        </div>    
                        <div>
                            <input type="text" placeholder="Last Name" className="form-styling-contact-us" name="lastName" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="form-styling-contact-us" name="email" />
                        </div>
                        <div>
                            <input type="text" placeholder="Phone" className="form-styling-contact-us" name="phone" />
                        </div>
                        <div>
                            <textarea placeholder="Subject" name="message" className="contact-us-textarea"></textarea>
                        </div>
                        <div>
                            <textarea placeholder="Message" name="message" className="contact-us-textarea"></textarea>
                        </div>
                        <div className="contact-us-buttons">
                            <div>
                                <button type="submit" className="contact-us-submit">Submit</button>
                            </div>
                            <div>
                                <button type="submit" className="contact-us-request-call">Request call<i className="fas fa-phone" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <ContactUsDetails />
            <FooterAboutus />
        </div>
    );
};

export default ContactUs;