import React from "react";
import { Link } from 'react-router-dom';
import HeaderAboutUs from "./HeaderAboutUs";
import aboutUsFrame1Bg from "../../public/images/about/aboutUsFrame1Bg.svg";
import HowItWorks from "./HowItWorks";
import Benifits from "./Benifits";
import FooterAboutus from "./FooterAboutus";
import {Container, Row, Col} from "react-bootstrap";



const AboutUs = () => {
    return (
        <div>
            <HeaderAboutUs />
            <div className="jobseeker-subheader">
                <div>
                    <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                    <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                    <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                    <a href='/https://www.youtube.com/channel/UCvtc12PbgBboCxMd-dHNscQ/about?disable_polymer=1' className="fa"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <Container>
                <div className="aboutUsFrame1">
                    <div className="aboutUsFrame1Left">
                        <div>
                            <h1>IHS Goes Beyond Keyword - Stepping Towards Augmented Intelligence</h1>
                        </div>
                        <div>
                            <h1 className="aboutus-frame1-heading">IHS Creates Impact</h1>
                        </div>
                        <div>
                            <p className="aboutus-frame1-p">Our industry-leading AI recruiting technology and platform has delivered transformational results, including 93% screen completion rates, 79% time-to-interview reduction, 2.5x increase in funnel conversion, and 144% recruiter productivity gains.</p>
                            <p className="aboutus-frame1-p">We work with enterprises and staffing agencies around the globe to rapidly implement and scale AI for recruiting across their businesses.IHS is a Very Innovative product rooted in Apptelligence Development.</p>
                            <p className="aboutus-frame1-p">Apptelligence is an Application/Product development company with Artificial Intelligence and Machine learning integrations that deliver advanced IT Products and services tailored to the needs of our customers along with expert training and development team. We are a team of dedicated, diverse, and talented IT professionals whose goal is to empower enterprises by providing the tools and resources they need to run their business at optimum efficiency. Armed with young brains and advanced technology solutions, we are driven to deliver valuable IT experiences to our customers through consulting, Artificial Intelligence, Machine Learning, Robotic Frameworks, Web Application Development, and more.</p>
                        </div>
                    </div>
                    <div className="aboutUsFrame1Right">
                        <img src={aboutUsFrame1Bg} className="aboutUsFrame1Bg"></img>
                    </div>
                </div>
            </Container>
            <Benifits />
            <FooterAboutus />
        </div>
    );
};

export default AboutUs;