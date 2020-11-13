import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumePassport = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Passport</h2>
            </div>
            <div className="resume-inner-container-padding">
                <input placeholder="passport number" className="resume-input" name="passportNumber" value={userData['passportNumber']} onChange={(e)=> setUserData({...userData, "passportNumber":e.target.value})} />
                <input placeholder="visa" className="resume-input" name="visa" value={userData['visa']} onChange={(e)=> setUserData({...userData, "visa":e.target.value})} />
            </div>
            <div>
                <button onClick={() => setStep(5)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(7)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumePassport;