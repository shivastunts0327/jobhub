import React, { Component } from "react";
import { Link } from 'react-router-dom';
import FooterJobseeker from './FooterJobseeker';
import jobseeker from "../../public/images/jobseeker/modalLeft.svg";
import HeaderRegister from "./HeaderRegister";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const passwordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/);
const fileRegex = RegExp(/^.*\.(docx|DOCX|doc|DOC|pdf|PDF)$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach( val => {
        val === null && (valid = false)
    });
    return valid;
}

const uploadImage = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0];

    const url = 'https://3giqa4utx4.execute-api.ap-south-1.amazonaws.com/default/getUrl';
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            key: "demo-file"
        })
    })
    .then(res => res.json())
    .then((response) => {
        console.log(response)
        fetch(response.uploadURL, {
            method: 'PUT',
            mode: 'cors',
            body: file
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}


class JobSeekerRegistration extends Component {
    constructor(props) {
        super(props);
        this.onChangeDisabled = this.onChangeDisabled.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            disabled: props.initialDisabled || false
        };
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            mobile: null,
            years: null,
            months: null,
            location: null,
            password: null,
            confirmPassword: null,
            file: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                years: "",
                months: "",
                location: "",
                password: "",
                confirmPassword: "",
                file: ""
            }
        }
    }

    

    onChangeDisabled = e => {
        this.setState({disabled: !e.target.checked});
    }

    handleSubmit = e => {
        e.preventDefault();

        try {
            fetch('https://9uhbb0u55e.execute-api.ap-south-1.amazonaws.com/dev/', {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email : this.state.email,
                    mobile : this.state.mobile,
                    years : this.state.years,
                    months : this.state.months,
                    location : this.state.location,
                    password : this.state.password,
                    confirmPassword : this.state.confirmPassword
                })
            })
            console.log('user registered')
            
        } catch (e) {
            console.log(e)
        }

        if(formValid(this.state)) {
            console.log(`
                First name : ${this.state.firstName}
                Last name : ${this.state.lastName}
                Email : ${this.state.email}
                Contact : ${this.state.mobile}
                years : ${this.state.years}
                months : ${this.state.months}
                location : ${this.state.location}
                password : ${this.state.password}
                Confirm : ${this.state.confirmPassword}
                file: ${this.state.file}
            `);
        } else {
            console.log('form invalid');
        }
    };

    

    handleChange = e => {
        e.preventDefault();
        
        const { name, value } = e.target;
        
        // let formErrors = this.state.formErrors;
        let formErrors = { ...this.state.formErrors };

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
            case 'email':
            formErrors.email = 
                emailRegex.test(value) && value.length > 0 
                ? '' 
                : "invalid email address";
            break;
            case 'mobile':
                formErrors.mobile = 
                    value.length < 10 && value.length > 0 
                    ? 'minimum 10 characters required' 
                    : "";
                break;
            case 'years':
                formErrors.years = 
                    value.length < 1 && value.length > 0
                    ? 'please enter number of years in experience' 
                    : "";
                break;
            case 'months':
                formErrors.months = 
                    value.length < 1 && value.length > 0 
                    ? 'please enter number of months in experience' 
                    : "";
                break;
            case 'location':
                formErrors.location = 
                    value.length < 1 && value.length > 0 
                    ? 'please enter location' 
                    : "";
                break;
            case 'password':
                formErrors.password = 
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
            case 'file':
                formErrors.file = 
                    fileRegex.test(value) && value.length > 0 
                    ? '' 
                    : "Only pdf, doc, docx";
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
            <HeaderRegister />
            <div className="jobseeker-subheader">
                <div>
                    <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                    <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                    <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                    <a href='/https://www.youtube.com/channel/UCvtc12PbgBboCxMd-dHNscQ/about?disable_polymer=1' className="fa"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div>
            <div className="job-signin">
                <div className="modal-login">
                    <p className="already">Already have an account?</p>
                    <Link to='/login' className="login-tag">Login</Link>
                </div>
            </div>
                <div className="jobseeker">
                    <div className="jobseeker-left">
                        <img src={jobseeker} className="jobseeker-img"></img>
                    </div>
                    <div className="jobseeker-registration">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="jobseeker-details">
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon">
                                        <input type="text" placeholder="First Name" className="form-styling" name="firstName" onChange={this.handleChange} noValidate/>
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                        {formErrors.firstName.length > 0 && (
                                            <span className="errorMessage">{formErrors.firstName}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon">
                                        <input type="text" placeholder="Last Name" className="form-styling" name="lastName" onChange={this.handleChange} noValidate />
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                        {formErrors.lastName.length > 0 && (
                                            <span className="errorMessage">{formErrors.lastName}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="jobseeker-details">
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon">
                                        <input type="email" placeholder="Email" className="form-styling" name="email" onChange={this.handleChange} noValidate />
                                        <i className="fas fa-envelope" aria-hidden="true"></i>
                                        {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon">
                                        <input type="text" placeholder="Contact number" className="form-styling" name="mobile" onChange={this.handleChange} noValidate />
                                        <i className="fas fa-phone" aria-hidden="true"></i>
                                        {formErrors.mobile.length > 0 && (
                                            <span className="errorMessage">{formErrors.mobile}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="form-styling-p">Total Experience</p>
                            </div>
                            <div className="exp-flex">
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <input type="text" placeholder="Years" className="form-styling-exp" name="years" onChange={this.handleChange} noValidate />
                                    {formErrors.years.length > 0 && (
                                        <span className="errorMessage">{formErrors.years}</span>
                                    )}
                                </div>
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <input type="text" placeholder="Months" className="form-styling-exp" name="months" onChange={this.handleChange} noValidate />  
                                    {formErrors.months.length > 0 && (
                                        <span className="errorMessage">{formErrors.months}</span>
                                    )}
                                </div>
                            </div>
                            <div className="jobseeker-details">
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon"> 
                                        <input type="text" placeholder="Current Location" className="form-styling-location" name="location" onChange={this.handleChange} noValidate />
                                        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                        {formErrors.location.length > 0 && (
                                            <span className="errorMessage">{formErrors.location}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="jobseeker-details">
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon"> 
                                        <input type="password" placeholder="Create password" className="form-styling" name="password" onChange={this.handleChange} noValidate />
                                        <i className="fas fa-lock" aria-hidden="true"></i>
                                        {formErrors.password.length > 0 && (
                                            <span className="errorMessage">{formErrors.password}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div className="modalIcon"> 
                                        <input type="password" placeholder="Confirm password" className="form-styling" name="confirmPassword" onChange={this.handleChange} noValidate />
                                        <i className="fas fa-lock" aria-hidden="true"></i>
                                        {formErrors.confirmPassword.length > 0 && (
                                            <span className="errorMessage">{formErrors.confirmPassword}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="jobseeker-details">
                                <div className="jobseeker-field-star">
                                    <p className="red-asterisk">*</p>
                                    <div>
                                        <input type="file" className="file" name="file" onChange={(e) => uploadImage(e)} noValidate />
                                        {formErrors.file.length > 0 && (
                                            <span className="errorMessage">{formErrors.file}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox-flex">
                                    <input type="checkbox" className="checkbox" checked={!this.state.disabled} onChange={this.onChangeDisabled} />
                                    <label className="accept">I accept the</label>
                                    <Link to='/terms' className="terms">terms and conditions</Link>
                                </div>
                            </div>
                            <div>
                                <button type="submit" disabled={this.state.disabled}  className="modal-register-jobseeker">Register<i className="fas fa-arrow-right" aria-hidden="true"></i></button>
                            </div>
                            <p>{this.state.message}</p>
                            
                        </form>
                    </div>
                </div>
            </div>
             
            <FooterJobseeker />
        </div>
    )
    }
}

export default JobSeekerRegistration;