import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import employer from '../../public/images/homepage/interview.svg';
import job from '../../public/images/homepage/opportunity.svg';
import TopHiringCompanies from './TopHiringCompanies';
import TrendingCategories from './TrendingCategories';
import IHSHelps from './IHSHelps';
import IHSCount from './IHSCount';
import Footer from './Footer';



const HomePage = () => {
    
    return (
    <div className="homepage-main-bg">
        <Header />
        <div className="homepage-margin">
        
        </div>
        <h1 className="headline">IHS Goes Beyond Keyword - Stepping Towards Augumented Intelligence</h1>
        <div className="landing-page">
                <div className="frame-1">
                    <Link to='/jobseeker/register' className="box-modal">
                        <img src={job} className="pic"></img>
                        <div className="frame1-right">
                            <h1>Jobseeker</h1>
                            <Link to="/jobseeker/register" className="frame1-btn-1">Upload Resume</Link>
                        </div>
                    </Link>
                </div>
                <div className="frame-1">
                    <a href="/employer/register" target="_blank" className="box-modal">
                        <img src={employer} className="pic"></img>
                        <div className="frame1-right">
                            <h1>Employer</h1>
                            <a href="/employer/register" target="_blank" className="frame1-btn-2">Post a Job</a>
                        </div>
                    </a>
                </div>
            
        </div>
        
        <TopHiringCompanies />
        <TrendingCategories />
        <IHSHelps />
        <IHSCount />
        <Footer />
    </div>
)};

export default HomePage;

