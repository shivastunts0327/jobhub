import React from 'react';
import orangeLine from '../../public/images/categories/orangeLine.svg';
import it from '../../public/images/categories/healthcare.svg';
import healthCare from '../../public/images/categories/healthcare.svg';
import BFSI from '../../public/images/categories/bfsi.svg';
import engineering from '../../public/images/categories/engineering.svg';
import education from '../../public/images/categories/education.svg';
import hr from '../../public/images/categories/hr.svg';
import bpo from '../../public/images/categories/bpo.svg';
import sales from '../../public/images/categories/sales.svg';
import legal from '../../public/images/categories/legal.svg';
import media from '../../public/images/categories/media.svg';
import fashion from '../../public/images/categories/fashion.svg';
import real from '../../public/images/categories/realEstate.svg';
import { Container ,Row, Col } from "react-bootstrap";



const TrendingCategories = () => {
    return (
        <div>
            <div className="trending-categories-bg">
                <div className="trending-categories-container">
                    <div className="trending-categories-headline">
                        <h1>TRENDING CATEGORIES</h1>
                        <img src={orangeLine}></img>
                    </div>
                    <Container className="categories-container">
                        <Row>
                            <Col sm={12} md={6} lg={4} xl={2} >
                                <div className="category">
                                    <div className="category-it">
                                        <img src={it}></img>
                                        <p>IT</p>
                                        <button>161</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-healthcare">
                                        <img src={healthCare}></img>
                                        <p>Health Care</p>
                                        <button>87</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                            <div className="category">
                                <div className="category-bfsi">
                                    <img src={BFSI}></img>
                                    <p>BFSI</p>
                                    <button>92</button>
                                </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-engineering">
                                        <img src={engineering}></img>
                                        <p>Engineering</p>
                                        <button>147</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-education">
                                        <img src={education}></img>
                                        <p>Education</p>
                                        <button>45</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-hr">
                                        <img src={hr}></img>
                                        <p>Hr/Adminstration</p>
                                        <button>87</button>
                                    </div>
                                </div>
                            </Col>
                        
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-bpo">
                                        <img src={bpo}></img>
                                        <p>BPO/KPO</p>
                                        <button>233</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-sales">
                                        <img src={sales}></img>
                                        <p>Sales/Marketing</p>
                                        <button>125</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-legal">
                                        <img src={legal}></img>
                                        <p>Legal</p>
                                        <button>345</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-media">
                                        <img src={media}></img>
                                        <p>Media/Entertainment</p>
                                        <button>56</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-fashion">
                                        <img src={fashion}></img>
                                        <p>Fashion Designing</p>
                                        <button>78</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={2}>
                                <div className="category">
                                    <div className="category-real">
                                        <img src={real}></img>
                                        <p>Real Estate</p>
                                        <button>87</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    

    );
};
export default TrendingCategories;