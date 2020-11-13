import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";
import employerInfo from '../../public/images/employer/employerInfo.svg';
import otherInfo from '../../public/images/employer/otherInfo.svg';
import benifits from '../../public/images/employer/benifits.svg';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const passwordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false)
    });
    return valid;
}


class EmployerForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            firstName: null,
            lastName: null,
            workEmail: null,
            phoneNumber: null,
            companyName: null,
            title: null,
            createPassword: null,
            confirmPassword: null,
            size: null,
            ats: null,
            formErrors: {
                firstName: "",
                lastName: "",
                workEmail: "",
                phoneNumber: "",
                companyName: "",
                title: "",
                createPassword: "",
                confirmPassword: "",
                size: "",
                ats: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        try {
            fetch('https://6kp7kqycol.execute-api.ap-south-1.amazonaws.com/dev/', {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    workEmail : this.state.workEmail,
                    phoneNumber : this.state.phoneNumber,
                    companyName : this.state.companyName,
                    title : this.state.title,
                    createPassword: this.state.createPassword,
                    confirmPassword: this.state.confirmPassword,
                    size : this.state.size,
                    ats : this.state.ats
                })
            })
            console.log('user registered')
        } catch (e) {
            console.log(e)
        }


        if(formValid(this.state.formErrors)) {
            console.log(`
                First name : ${this.state.firstName}
                Last name : ${this.state.lastName}
                workEmail : ${this.state.workEmail}
                phoneNumber : ${this.state.phoneNumber}
                companyName : ${this.state.companyName}
                title : ${this.state.title}
                createPassword: ${this.state.createPassword}
                confirmPassword: ${this.state.confirmPassword}
                size : ${this.state.size}
                ats : ${this.state.ats}
            `);
        } else {
            console.log('form invalid');
        }
    };

    handleChange = e => {
        e.preventDefault();
        
        const { name, value } = e.target;
        
        let formErrors = this.state.formErrors;


        switch(name) {
            case 'firstName':
                formErrors.firstName = 
                    value.length < 3 && value.length > 0 
                    ? 'minimum 3 characters required' 
                    : "";
                break;
            case 'lastName':
                formErrors.lastName = 
                    value.length < 3 && value.length > 0 
                    ? 'minimum 3 characters required' 
                    : "";
                break;
            case 'workEmail':
            formErrors.workEmail = 
                emailRegex.test(value) && value.length > 0 
                ? '' 
                : "invalid email address";
            break;
            case 'phoneNumber':
                formErrors.phoneNumber = 
                    value.length < 10 && value.length > 0 
                    ? 'minimum 10 characters required' 
                    : "";
                break;
            case 'companyName':
                formErrors.companyName = 
                    value.length < 1 && value.length > 0
                    ? 'please enter company name' 
                    : "";
                break;
            case 'title':
                formErrors.title = 
                    value.length < 1 && value.length > 0 
                    ? 'please enter title' 
                    : "";
                break;
                case 'createPassword':
                formErrors.createPassword = 
                    passwordRegex.test(value) && value.length > 0 
                    ? '' 
                    : "Min 6 including one uppercase, lowercase, number, special character";
                break;
            case 'confirmPassword':
                formErrors.confirmPassword = 
                    passwordRegex.test(value) && value.length > 0 
                    ? '' 
                    : "Min 6 including one uppercase, lowercase, number, special character";
                break;
            case 'size':
                formErrors.size = 
                    value.length < 1 && value.length > 0 
                    ? 'please enter size' 
                    : "";
                break;
            case 'ats':
                formErrors.ats = 
                value.length < 1 && value.length > 0 
                ? 'please enter ats' 
                : "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value }, () => console.log(this.state));

        

    }

    render() {
        const { formErrors } = this.state;

    return (
        <div className="employer-main-container">
            <Container className="employer-container">
                <Row>
                    <Col lg={8} className="employerForm">
                        <Row className="employer-info">
                            <img src={employerInfo} className="employerInfo-img" />
                            <p className="employer-info-p">Employer Info</p>
                        </Row>
                        <Row className="employer-form-margin">
                            <form onSubmit={this.handleSubmit} noValidate>
                                <Row>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>First Name</label>
                                        <div className="modalIcon">
                                            <input type="text" className="employer-form" name="firstName" onChange={this.handleChange} noValidate/>
                                            <i className="fas fa-user" aria-hidden="true"></i>
                                            {formErrors.firstName.length > 0 && (
                                                <span className="errorMessage">{formErrors.firstName}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Last Name</label>
                                        <div className="modalIcon">
                                            <input type="text" className="employer-form" name="lastName" onChange={this.handleChange} noValidate/>
                                            <i className="fas fa-user" aria-hidden="true"></i>
                                            {formErrors.lastName.length > 0 && (
                                                <span className="errorMessage">{formErrors.lastName}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Work Email</label>
                                        <div className="modalIcon">
                                            <input type="email" className="employer-form" name="workEmail" onChange={this.handleChange} noValidate/>
                                            <i className="fas fa-envelope" aria-hidden="true"></i>
                                            {formErrors.workEmail.length > 0 && (
                                                <span className="errorMessage">{formErrors.workEmail}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Phone Number</label>
                                        <div className="modalIcon">
                                            <input type="text" className="employer-form" name="phoneNumber" onChange={this.handleChange} noValidate/>
                                            <i className="fas fa-phone" aria-hidden="true"></i>
                                            {formErrors.phoneNumber.length > 0 && (
                                                <span className="errorMessage">{formErrors.phoneNumber}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Company Name</label>
                                        <div>
                                            <input type="text" className="employer-form-noIcon" name="companyName" onChange={this.handleChange} noValidate/>
                                            {formErrors.companyName.length > 0 && (
                                                <span className="errorMessage">{formErrors.companyName}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Title</label>
                                        <div>
                                            <input type="text" placeholder="Designation" className="employer-form-noIcon" name="title" onChange={this.handleChange} noValidate/>
                                            {formErrors.title.length > 0 && (
                                                <span className="errorMessage">{formErrors.title}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Password</label>
                                        <div className="modalIcon">
                                            <input type="password" className="employer-form" name="createPassword" onChange={this.handleChange} noValidate/>
                                            <i className="fas fa-lock" aria-hidden="true"></i>
                                            {formErrors.createPassword.length > 0 && (
                                                <span className="errorMessage">{formErrors.createPassword}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Confirm password</label>
                                        <div className="modalIcon">
                                            <input type="password" className="employer-form" name="confirmPassword" onChange={this.handleChange} noValidate/>
                                            <i className="fas fa-lock" aria-hidden="true"></i>
                                            {formErrors.confirmPassword.length > 0 && (
                                                <span className="errorMessage">{formErrors.confirmPassword}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="other-info">
                                            <img src={otherInfo} className="other-info-img" />
                                            <p className="other-info-p">Other info</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>Company size</label>
                                        <div>
                                            <select className="company-size" name="size" onChange={this.handleChange} noValidate>
                                                <option>1-10</option>
                                                <option>20-50</option>
                                                <option>50-100</option>
                                                <option>101-500</option>
                                                <option>500+</option>
                                            </select>
                                            {formErrors.size.length > 0 && (
                                                <span className="errorMessage">{formErrors.size}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <label>ATS</label>
                                        <div>
                                            <input type="text" className="employer-form-noIcon" name="ats" onChange={this.handleChange} noValidate/>
                                            {formErrors.ats.length > 0 && (
                                                <span className="errorMessage">{formErrors.ats}</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="checkbox-flex">
                                            <input type="checkbox" className="checkbox-employer-form" />
                                            <label className="accept-employer-form">I accept the</label>
                                            <Link to='/terms' className="terms-employer-form">terms and conditions</Link>
                                        </div>
                                    </Col>
                                    <Col className="demo-register">
                                        <button  className="employer-request-demo">Request Demo</button>
                                        <button type="submit" className="employer-register">Register<i className="fas fa-arrow-right" aria-hidden="true"></i></button>
                                    </Col>
                                </Row>
                            </form>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <div className="employer-reg-page-benifits-container">
                            <div className="employer-reg-page-benifits-bg">
                                <h2>Recruiter benifits</h2>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                            <div className="employer-reg-page-benifits-bg">
                                <h2>Organizational benifits</h2>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                            <div className="employer-reg-page-benifits-bg">
                                <h2>Candidate benifits</h2>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                            <img src={benifits} className="employer-reg-page-benifits-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
}

export default EmployerForm;