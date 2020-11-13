import React, { Component } from "react";
import { Link } from 'react-router-dom';
import FooterJobseeker from "./FooterJobseeker";
import login from "../../public/images/jobseeker/login-bg.svg";
import HeaderLogin from "./HeaderLogin";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const passwordRegx = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false)
    });
    return valid;
}


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)) {
            console.log(`
                ---submitting---
                Email : ${this.state.email}
                password : ${this.state.password}
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
            case 'email':
            formErrors.email = 
                emailRegex.test(value) && value.length > 0 
                ? '' 
                : "invalid email address";
            break;
            case 'password':
                formErrors.password = 
                    passwordRegx.test(value) && value.length > 0 
                    ? '' 
                    : "Min 6 including one uppercase, lowercase, number, special character";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value }, () => console.log(this.state));

    }


    render() {
        const { formErrors } = this.state;

    return (
        <div>
            <HeaderLogin />
            <div className="jobseeker-subheader">
                <div>
                    <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                    <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                    <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                    <a href='/youtube' className="fa"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="signup-tag">
                <div className="modal-login">
                    <p className="newUser">I'm a new user?</p>
                    <Link to='/jobseeker/register' className="signup">Signup</Link>
                </div>
            </div>
            <div>
                <div className="login-container">
                    <div className="login-image">
                        <img src={login} className="login-img"></img>
                    </div>
                    <div className="login-right-container">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="jobseeker-details">
                                <div className="modalIcon">
                                    <input type="email" placeholder="Email" className="form-styling-login-page" name="email" onChange={this.handleChange} noValidate />
                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                            </div>
                            <div className="jobseeker-details">
                                <div className="modalIcon"> 
                                    <input type="password" placeholder="Password" className="form-styling-login-page" name="password" onChange={this.handleChange} noValidate />
                                    <i className="fas fa-lock" aria-hidden="true"></i>
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>
                            </div>
                            <div className="checkbox-flex-login">
                                <div className="login-flex">
                                    <input type="checkbox" className="checkbox"/>
                                    <label className="accept">Remember me</label>
                                </div>
                                <Link to='/forgot' className="forgot">Forgot password?</Link>
                            </div>
                           
                            <div>
                                <button type="submit" className="login-main-button">LOGIN<i className="fas fa-arrow-right" aria-hidden="true"></i></button>
                            </div>
                        </form>
                        <p className="connect">Or connect with</p>
                        <div className="form-flex">
                            <a href="https://mxk8ug2guk.execute-api.ap-south-1.amazonaws.com/default/facebook" className="social-login-facebook"><p>Login with</p><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                            <a  href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https://www.googleapis.com/auth/gmail.readonly&response_type=code&client_id=896265175840-p0m7ebj28vp4avo5brdnq5uesgmdinm3.apps.googleusercontent.com&redirect_uri=https://api-university.com/newsletter/thankyou/"
                                    className="social-login-google"><p>Login with</p><i className="fab fa-google" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=77tc6huqpfomre&redirect_uri=https%3A%2F%2Ftpaec2x8wc.execute-api.ap-south-1.amazonaws.com%2Fprod%2Flinkedin"
                                    className="social-login-linkedin"><p>Login with</p><i className="fab fa-linkedin-in" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
             
            <FooterJobseeker />
        </div>
    )
    }
}

export default Login;

                       