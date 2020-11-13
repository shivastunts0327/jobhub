import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeExperience = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Work Experience</h2>
            </div>
            <div className="resume-inner-container-padding">
                <input placeholder="Company name" className="resume-input" name="companyName" value={userData['companyName']} onChange={(e)=> setUserData({...userData, "companyName":e.target.value})} />
                <input placeholder="Designation" className="resume-input" name="designation" value={userData['designation']} onChange={(e)=> setUserData({...userData, "designation":e.target.value})} />
                <input placeholder="Period" className="resume-input" name="period" value={userData['period']} onChange={(e)=> setUserData({...userData, "period":e.target.value})} />
                <input placeholder="Team size" className="resume-input" name="teamSize" value={userData['teamSize']} onChange={(e)=> setUserData({...userData, "teamSize":e.target.value})} />
                <input placeholder="Work location" className="resume-input" name="workLocation" value={userData['workLocation']} onChange={(e)=> setUserData({...userData, "workLocation":e.target.value})} />
                <input placeholder="Domain" className="resume-input" name="domain" value={userData['domain']} onChange={(e)=> setUserData({...userData, "domain":e.target.value})} />
            </div>
            <div>
                <button className="add-experience"><i className="fas fa-plus"></i>Add experience</button>
            </div>
            <div>
                <button onClick={() => setStep(2)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(4)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeExperience;