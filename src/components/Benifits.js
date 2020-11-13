import React from "react";
import { Link } from 'react-router-dom';
import recruiterBenifits from "../../public/images/about/recruiterBenifits.svg";
import organizationalBenifits from "../../public/images/about/organizationalBenifits.svg";
import jobseekerBenifits from "../../public/images/about/jobseekerBenifits.svg";
import benifitsRightBg from "../../public/images/about/benifitsRightBg.svg";
import aboutUsCandidate from "../../public/images/about/aboutUsCandidate.svg";
import aboutUsRecruiter from "../../public/images/about/aboutUsRecruiter.svg";
import {Container, Row, Col} from "react-bootstrap";

const Benifits = () => {
    return (
        <div className="benifits-bg">
            <div className="benifits">
                <div>
                    <div>
                        <img src={recruiterBenifits} className="recruiterBenifits-img"></img>
                    </div>
                    <div className="recruiterBenifit-content">
                        <h2>Recruiter Benifits</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    </div>        
                    <div className="organizationalBenifits">
                        <img src={organizationalBenifits} className="organizationalBenifits-img"></img>
                    </div>
                    <div className="organizationalBenifit-content">
                        <h2>Organizational Benifits</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    </div>
                    <div className="jobseekerBenifits">
                        <img src={jobseekerBenifits} className="jobseekerBenifits-img"></img>
                    </div>
                    <div className="jobseekerBenifit-content">
                        <h2>Jobseeker Benifits</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    </div>
                </div>
                <div className="benifits-right">
                    <img src={benifitsRightBg} className="benifitsRightBg"></img>
                </div>
            </div>
            <Container className="aboutusEnding">
                <Row>
                <Col>
                <Link to='/jobseeker/register' className="aboutus-candidate">
                    <img src={aboutUsCandidate} className="aboutUsCandidate"></img>
                    <div className="aboutusEnding-right">
                        <h2>Are you</h2>
                        <h1>Candidate?</h1>
                        <Link to='/jobseeker/register' className="aboutus-link">Register now</Link>
                    </div>
                </Link>
                </Col>
                <Col>
                <Link to='/register' className="aboutus-candidate">
                    <img src={aboutUsRecruiter} className="aboutUsCandidate"></img>
                    <div className="aboutusEnding-right">
                        <h2>Are you</h2>
                        <h1>Recruiter?</h1>
                        <Link to='/register' className="aboutus-link">Register now</Link>
                    </div>
                </Link>
                </Col>
                </Row>
                
                
            </Container>
        </div>
    );
};

export default Benifits;

