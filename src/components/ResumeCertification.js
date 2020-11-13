import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeCertification = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Certification</h2>
            </div>
            <div className="resume-inner-container-padding">
                <input placeholder="Course" className="resume-input" name="course" value={userData['course']} onChange={(e)=> setUserData({...userData, "course":e.target.value})} />
                <input placeholder="Institute" className="resume-input" name="institute" value={userData['institute']} onChange={(e)=> setUserData({...userData, "institute":e.target.value})} />
                <input placeholder="Year attained" className="resume-input" name="yearAttained" value={userData['yearAttained']} onChange={(e)=> setUserData({...userData, "yearAttained":e.target.value})} />
            </div>
            <div>
                <button className="add-experience"><i className="fas fa-plus"></i>Add certification</button>
            </div>
            <div>
                <button onClick={() => setStep(4)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(6)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeCertification;