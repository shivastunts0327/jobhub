import React from "react";
import { Link } from 'react-router-dom';
import HeaderAboutUs from "./HeaderAboutUs";
import ContactUsDetails from "./ContactUsDetails";
import FooterAboutus from "./FooterAboutus";
import {Container, Row, Col, Card, CardDeck} from "react-bootstrap";


const BlogGrid = () => {
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
            <Container>
                <Row>
                    <CardDeck>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} sm={6}>
                            <Card className="blog">
                                <Card.Body className="ihs-blog">
                                    <div className="blog-date-month">
                                        <h3>22</h3>
                                        <p className="blog-month">Dec</p>
                                    </div>
                                    <div>
                                        <Card.Title className="blog-title"><a href="/" target="_blank">But I must explain to you all</a></Card.Title>
                                        <Card.Text className="blog-text">
                                            Combined with a handful of model sentence structures, to generate lorem Ipsum which
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <div className="blog-footer">
                                    <div>
                                        <hr className="hr"></hr>
                                    </div>
                                    <div className="blog-user-comment">
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-user"></i>
                                            <p>Robert Karlos</p>
                                        </Link>
                                        <Link to='/' className="user-comment">
                                            <i className="far fa-comments"></i>
                                            <p>42</p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </CardDeck>
                </Row>
            </Container>
            <FooterAboutus />
        </div>
    );
};
export default BlogGrid;