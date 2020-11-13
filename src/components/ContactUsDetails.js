import React from "react";
import { Link } from 'react-router-dom';
import location from '../../public/images/contact/location.svg';
import message from '../../public/images/contact/message.svg';
import phone from '../../public/images/contact/phone.svg';
import greyLine from '../../public/images/contact/greyLine.svg';
import {Container, Row, Col} from "react-bootstrap";


const ContactUsDetails = () => {
    return (
        <Container>
        <Row className="contact-us-details-flex">
            <Col sm={12} md={4}>
                <div className="contact-us-details-location">
                    <div>
                        <img src={location} className="contact-us-location"></img>
                    </div>
                    <div>
                        <p>Wills Block Road No. 2 Financial District, Hyderabad-500032</p>
                    </div>
                    <hr className="contactus-details-hr"/>
                    <div>
                        <p>Wills Block Road No. 2 Financial District, Hyderabad-500032</p>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="contact-us-details">
                    <img src={message}></img>
                    <div className="contact-message">
                        <Link to="/message" className="contact-us-message">admin@ihscareers.com</Link>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className="contact-us-details-2">
                    <img src={phone}></img>
                    <div className="contact-message">
                        <Link to="/message" className="contact-us-message">admin@ihscareers.com</Link>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
    );
};

export default ContactUsDetails;