import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeInformation = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Information</h2>
            </div>
            <div className="resume-inner-container-padding">
                <input placeholder="current role" className="resume-input" name="currentRole" value={userData['currentRole']} onChange={(e)=> setUserData({...userData, "currentRole":e.target.value})} />
                <input placeholder="desired role" className="resume-input" name="desiredRole" value={userData['desiredRole']} onChange={(e)=> setUserData({...userData, "desiredRole":e.target.value})} />
                <input placeholder="domain expertise" className="resume-input" name="domainExpertise" value={userData['domainExpertise']} onChange={(e)=> setUserData({...userData, "domainExpertise":e.target.value})} />
                <input placeholder="current ctc" className="resume-input" name="currentCTC" value={userData['currentCTC']} onChange={(e)=> setUserData({...userData, "currentCTC":e.target.value})} />
                <input placeholder="expected ctc" className="resume-input" name="expectedCTC" value={userData['expectedCTC']} onChange={(e)=> setUserData({...userData, "expectedCTC":e.target.value})} />
                <input placeholder="preferred location" className="resume-input" name="preferredLocation" value={userData['preferredLocation']} onChange={(e)=> setUserData({...userData, "preferredLocation":e.target.value})} />
            </div>
            <div>
                <button onClick={() => setStep(1)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(3)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeInformation;