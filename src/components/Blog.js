import React from "react";
import { Link } from 'react-router-dom';
import HeaderAboutUs from "./HeaderAboutUs";
import FooterAboutus from "./FooterAboutus";


const Blog = () => {
    return (
        <div>
            <HeaderAboutUs />
            <div className="jobseeker-subheader">
                <div>
                    <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                    <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                    <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            
            
            <FooterAboutus />
        </div>
    );
};

export default Blog;