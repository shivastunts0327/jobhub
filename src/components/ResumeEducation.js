import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeEducation = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Education</h2>
            </div>
            <div className="resume-inner-container-padding">
                <input placeholder="Qualification" className="resume-input" name="qualification" value={userData['qualification']} onChange={(e)=> setUserData({...userData, "qualification":e.target.value})} />
                <input placeholder="Specialization" className="resume-input" name="specialization" value={userData['specialization']} onChange={(e)=> setUserData({...userData, "specialization":e.target.value})} />
                <input placeholder="University/College" className="resume-input" name="university" value={userData['university']} onChange={(e)=> setUserData({...userData, "university":e.target.value})} />
                <input placeholder="Location" className="resume-input" name="location" value={userData['location']} onChange={(e)=> setUserData({...userData, "location":e.target.value})} />
                <input placeholder="Year of passing" className="resume-input" name="yearOfPassing" value={userData['yearOfPassing']} onChange={(e)=> setUserData({...userData, "yearOfPassing":e.target.value})} />
                <input placeholder="GPA" className="resume-input" name="gpa" value={userData['gpa']} onChange={(e)=> setUserData({...userData, "gpa":e.target.value})} />
            </div>
            <div>
                <button className="add-experience"><i className="fas fa-plus"></i>Add Education</button>
            </div>
            <div>
                <button onClick={() => setStep(3)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(5)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeEducation;