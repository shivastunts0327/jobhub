import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeHeadline = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);




    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Headline</h2>
            </div>
            <div>
                <textarea name="headline" value={userData['headline']} onChange={(e)=> setUserData({...userData, "headline":e.target.value})}></textarea>
            </div>
            <div>
                <button onClick={() => setStep(2)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeHeadline;


// <TextField label="headline" margin="normal" variant="outlined" color="secondary" className="color" />