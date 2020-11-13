import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import HeaderRegister from "./HeaderRegister";
import jobInformation from '../../public/images/postAJob/jobInformation.svg';
import jobSummary from '../../public/images/postAJob/jobSummary.svg';
import rolesResponsibilities from '../../public/images/postAJob/rolesResponsibilities.svg';
import additionalBenifits from '../../public/images/postAJob/additionalBenifits.svg';
import aboutCompany from '../../public/images/postAJob/aboutCompany.svg';


class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        jobTitle:  '',
        category: '',
        workLocation: '',
        workType: '',
        experience: '',
        minSalary: '',
        maxSalary: '',
        qualification: '',
        travelPercentage: '',
        workingHours: '',
        jobSummary: '',
        rolesResponsibilities: '',
        benifits: '',
        companyName: '', 
        url: '',
        companyProfile: '',
        companySize: '',
        headOffice: '',
        establishment: ''
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()

        try {
            fetch('https://4uierkr06d.execute-api.ap-south-1.amazonaws.com/prod/post-job', {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    jobTitle: this.state.jobTitle,
                    category: this.state.category,
                    workLocation : this.state.workLocation,
                    workType : this.state.workType,
                    experience : this.state.experience,
                    minSalary : this.state.minSalary,
                    maxSalary : this.state.maxSalary,
                    qualification : this.state.qualification,
                    travelPercentage : this.state.travelPercentage,
                    workingHours: this.state.workingHours,
                    jobSummary: this.state.jobSummary,
                    rolesResponsibilities : this.state.rolesResponsibilities,
                    benifits : this.state.benifits,
                    companyName : this.state.companyName,
                    url : this.state.url,
                    companyProfile : this.state.companyProfile,
                    companySize : this.state.companySize,
                    headOffice : this.state.headOffice,
                    establishment: this.state.establishment
                })
            })
            console.log('user registered')
        } catch (e) {
            console.log(e)
        }


        const { jobTitle, category, workLocation, workType, experience, minSalary, maxSalary, qualification, travelPercentage, workingHours, jobSummary, rolesResponsibilities, benifits, companyName, url, companyProfile, companySize, headOffice, establishment } = this.state
        console.log(`Your registration detail: \n 
            jobTitle: ${jobTitle} \n 
            category: ${category} \n
            workLocation: ${workLocation} \n
            workType: ${workType} \n
            experience: ${experience} \n
            minSalary: ${minSalary} \n
            maxSalary: ${maxSalary} \n
            qualification: ${qualification} \n
            travelPercentage: ${travelPercentage} \n
            workingHours: ${workingHours} \n
            jobSummary: ${jobSummary} \n
            rolesResponsibilities: ${rolesResponsibilities} \n
            benifits: ${benifits} \n
            companyName: ${companyName} \n
            url: ${url} \n
            companyProfile: ${companyProfile} \n 
            companySize: ${companySize} \n
            headOffice: ${headOffice} \n
            establishment: ${establishment}` 
        )
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 5? 6: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }

    _preview = () => {
        let currentStep = this.state.currentStep
        currentStep = 5? currentStep + 1 : 5
        this.setState({
            currentStep: currentStep
        })
    }
  
    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
        return (
            <button 
            className="previous-postajob" 
            type="button" onClick={this._prev}>
            <i className="fas fa-arrow-left"></i>
            Previous
            </button>
        )
        }
        return null;
    }
  
    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <5){
        return (
            <button 
            className="next-postajob float-right" 
            type="button" onClick={this._next}>
            Save & Continue
            <i className="fas fa-arrow-right"></i>
            </button>        
        )
        }
        return null;
    }

    previewButton(){
        let currentStep = this.state.currentStep;
        if(currentStep >= 5 && currentStep <6){
        return (
            <button 
            className="preview-postajob float-right" 
            type="button" onClick={this._preview}>
            Preview
            <i className="fas fa-arrow-right"></i>
            </button>        
        )
        }
        return null;
    }
    
    render() {    
      return (
        <React.Fragment>
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
            <Container>
                <div className="post-a-job-main-container">
                    <p className="currentStep-tag">Step {this.state.currentStep} / 6 </p> 
            
                    <form onSubmit={this.handleSubmit}>
                        {/* 
                        render the form steps and pass required props in
                        */}
                        <Step1 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            jobTitle={this.state.jobTitle}
                            category={this.state.category}
                            workLocation={this.state.workLocation}
                            workType={this.state.workType}
                            experience={this.state.experience}
                            minSalary={this.state.minSalary}
                            maxSalary={this.state.maxSalary}
                            qualification={this.state.qualification}
                            travelPercentage={this.state.travelPercentage}
                            workingHours={this.state.workingHours}
                        />
                        <Step2 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            jobSummary={this.state.jobSummary}
                        />
                        <Step3 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            rolesResponsibilities={this.state.rolesResponsibilities}
                        />
                        <Step4 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            benifits={this.state.benifits}
                        />
                        <Step5 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            companyName={this.state.companyName}
                            url={this.state.url}
                            companyProfile={this.state.companyProfile}
                            companySize={this.state.companySize}
                            headOffice={this.state.headOffice}
                            establishment={this.state.establishment}
                        />
                        <Step6 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            jobTitle={this.state.jobTitle}
                            category={this.state.category}
                            workLocation={this.state.workLocation}
                            workType={this.state.workType}
                            experience={this.state.experience}
                            minSalary={this.state.minSalary}
                            maxSalary={this.state.maxSalary}
                            qualification={this.state.qualification}
                            travelPercentage={this.state.travelPercentage}
                            workingHours={this.state.workingHours}
                            jobSummary={this.state.jobSummary}
                            rolesResponsibilities={this.state.rolesResponsibilities}
                            benifits={this.state.benifits}
                            companyName={this.state.companyName}
                            url={this.state.url}
                            companyProfile={this.state.companyProfile}
                            companySize={this.state.companySize}
                            headOffice={this.state.headOffice}
                            establishment={this.state.establishment}
                        />
                        {this.previousButton()}
                        {this.nextButton()}
                        {this.previewButton()}
                
                    </form>
                </div>
            </Container>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Col className="post-a-jon-main-heading-img">
                        <img src={jobInformation} className="jobInformation-img" />
                        <h2 className="jobInformation-tag">Job Information</h2>
                    </Col>
                </Col>
                <Col>
                    <div className="form-group">
                        <label htmlFor="jobTitle" className="postajob-label">Your Job title here</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="jobTitle"
                            type="text"
                            placeholder="Enter job title"
                            value={props.jobTitle}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="category" className="postajob-label">Category</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="category"
                            type="text"
                            placeholder="Category"
                            value={props.category}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="workLocation" className="postajob-label">Work Location</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="workLocation"
                            type="text"
                            placeholder="Work Location"
                            value={props.workLocation}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="workType" className="postajob-label">Job Type</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="workType"
                            type="text"
                            placeholder="Job Type"
                            value={props.workType}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="experience" className="postajob-label">Experience</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="experience"
                            type="text"
                            placeholder="Experience"
                            value={props.experience}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="minSalary" className="postajob-label">Min Salary</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="minSalary"
                            type="text"
                            placeholder="Min salary"
                            value={props.minSalary}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="maxSalary" className="postajob-label">Max Salary</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="maxSalary"
                            type="text"
                            placeholder="Max Salary"
                            value={props.maxSalary}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-group">
                        <label htmlFor="qualification" className="postajob-label">Qualification</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="qualification"
                            type="text"
                            placeholder="Qualification"
                            value={props.qualification}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="travelPercentage" className="postajob-label">Travel Percentage</label>
                        <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="travelPercentage"
                            type="text"
                            placeholder="Travel Percentage"
                            value={props.travelPercentage}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="form-group">
                        <label htmlFor="workingHours" className="postajob-label">Working Hours</label>
                        <input
                            className="form-control no-border"
                            id="post-a-job-input-label"
                            name="workingHours"
                            type="text"
                            placeholder="Working Hours"
                            value={props.workingHours}
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                </Col>
            </Row>
        </Container>
      
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
       <Container className="job-information-container">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Col className="post-a-jon-main-heading-img">
                        <img src={jobSummary} className="jobInformation-img" />
                        <h2 className="jobInformation-tag">Job Summary</h2>
                    </Col>
                </Col>
                <Col>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="jobSummary"
                            name="jobSummary"
                            placeholder="Summary"
                            value={props.jobSummary}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
       </Container> 
      
    );
  }

  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
       <Container className="job-information-container">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Col className="post-a-jon-main-heading-img">
                        <img src={rolesResponsibilities} className="jobInformation-img" />
                        <h2 className="jobInformation-tag">Roles & Responsibilities</h2>
                    </Col>
                </Col>
                <Col>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="rolesResponsibilities"
                            name="rolesResponsibilities"
                            placeholder="Roles and Responsibilities"
                            value={props.rolesResponsibilities}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
       </Container>
    );
  }
  
  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
       <Container className="job-information-container">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Col className="post-a-jon-main-heading-img">
                        <img src={additionalBenifits} className="jobInformation-img" />
                        <h2 className="jobInformation-tag">Additional Benifits</h2>
                    </Col>
                </Col>
                <Col>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="benifits-postajob"
                            name="benifits"
                            placeholder="Additional Benifits"
                            value={props.benifits}
                            onChange={props.handleChange}
                        />
                    </div>
                </Col>
            </Row>
       </Container>
    );
  }

  function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    } 
    return(
        <React.Fragment>
            <Container className="job-information-container">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Col className="post-a-jon-main-heading-img">
                            <img src={aboutCompany} className="jobInformation-img" />
                            <h2 className="jobInformation-tag">About Company</h2>
                        </Col>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="companyName"
                            type="text"
                            placeholder="Company Name"
                            value={props.companyName}
                            onChange={props.handleChange}
                            />      
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="form-group">
                            <label htmlFor="url">Website URL</label>
                            <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="url"
                            type="text"
                            placeholder="Website URL here"
                            value={props.url}
                            onChange={props.handleChange}
                            />      
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="form-group">
                            <label htmlFor="companyProfile">Company Profile</label>
                            <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="companyProfile"
                            type="text"
                            placeholder="Company Profile"
                            value={props.companyProfile}
                            onChange={props.handleChange}
                            />      
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="form-group">
                            <label htmlFor="companySize">Company Size</label>
                            <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="companySize"
                            type="text"
                            placeholder="Company Size"
                            value={props.companySize}
                            onChange={props.handleChange}
                            />      
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="form-group">
                            <label htmlFor="headOffice">Head Office</label>
                            <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="headOffice"
                            type="text"
                            placeholder="Head Office"
                            value={props.headOffice}
                            onChange={props.handleChange}
                            />      
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="form-group">
                            <label htmlFor="establishment">Year of establishment</label>
                            <input
                            className="form-control"
                            id="post-a-job-input-label"
                            name="establishment"
                            type="text"
                            placeholder="Year of establishment"
                            value={props.establishment}
                            onChange={props.handleChange}
                            />      
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </React.Fragment>
    );
}

   

function Step6(props) {
    if (props.currentStep !== 6) {
      return null
    } 
    return(
       <Container className="job-information-container">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h2 className="jobInformation-tag">Preview</h2>
                </Col>
                <Col lg={12}>
                    <h2 className="preview-subheading">Job Information</h2>
                </Col>
                <Col lg={12} className="preview-col-p-flex">
                    <Col lg={3}>
                        <h3>Job Title :</h3>
                    </Col>
                    <Col lg={9}>
                        <p className="preview-output-p">{props.jobTitle}</p>
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Job Category :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.category}</p>
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Work Location :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.workLocation}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Job Type :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.workType}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={7}>
                        <h3>Work Experience :</h3>
                    </Col>
                    <Col lg={5}>
                        <p className="preview-output-p">{props.experience}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Min Salary :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.minSalary}</p>
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Max Salary :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.maxSalary}</p>
                    </Col>
                </Col>
                <Col lg={12} className="preview-col-p-flex">
                    <Col lg={3}>
                        <h3>Qualification :</h3>
                    </Col>
                    <Col lg={9}>
                        <p className="preview-output-p">{props.qualification}</p>
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={7}>
                        <h3>Travel Percentage :</h3>
                    </Col>
                    <Col lg={5}>
                        <p className="preview-output-p">{props.travelPercentage}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Working Hours :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.workingHours}</p>                    
                    </Col>
                </Col>
                <Col lg={12}>
                    <h2 className="preview-subheading">Job Summary</h2>
                </Col>
                <Col lg={12} className="preview-col-p-flex">
                    <Col lg={3}>
                        <h3>Job Summary :</h3>
                    </Col>
                    <Col lg={9}>
                        <p className="preview-output-p">{props.jobSummary}</p>
                    </Col>
                </Col>
                <Col lg={12}>
                    <h2 className="preview-subheading">Roles & Responsibilities</h2>
                </Col>
                <Col lg={12} className="preview-col-p-flex">
                    <Col lg={4}>
                        <h3>Roles & Responsibilities :</h3>
                    </Col>
                    <Col lg={8}>
                        <p className="preview-output-p">{props.rolesResponsibilities}</p>
                    </Col>
                </Col>
                <Col lg={12}>
                    <h2 className="preview-subheading">Additional Benifits</h2>
                </Col>
                <Col lg={12} className="preview-col-p-flex">
                    <Col lg={3}>
                        <h3>Benifits :</h3>
                    </Col>
                    <Col lg={9}>
                        <p className="preview-output-p">{props.benifits}</p>
                    </Col>
                </Col>
                <Col lg={12}>
                    <h2 className="preview-subheading">About Company</h2>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Company Name :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.companyName}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Website URL :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.url}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Company Profile :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.companyProfile}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Company Size :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.companySize}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={6}>
                        <h3>Head Office :</h3>
                    </Col>
                    <Col lg={6}>
                        <p className="preview-output-p">{props.headOffice}</p>                    
                    </Col>
                </Col>
                <Col lg={6} className="preview-col-p-flex">
                    <Col lg={8}>
                        <h3>Year of Establishment :</h3>
                    </Col>
                    <Col lg={4}>
                        <p className="preview-output-p">{props.establishment}</p>                    
                    </Col>
                </Col>
            </Row>
            <Row>
                <button className="post-a-job-submit">Post<i className="fas fa-thumbs-up"></i></button>
            </Row>
       </Container>
    );
  }
  
export default MasterForm;