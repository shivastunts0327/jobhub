import React, { useContext } from "react";
import { Stepper, StepLabel, Step, Typography, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import ResumeHeadline from "./ResumeHeadline";
import ResumeInformation from "./ResumeInformation";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeCertification from "./ResumeCertification";
import ResumePassport from "./ResumePassport";
import ResumeSocialProfile from "./ResumeSocialProfile";
import { multiStepContext } from './StepContext';

// npm uninstall @material-ui/icons

const AddResume = () => {

    const muiTheme = createMuiTheme({
        overrides: {
            MuiStepIcon: {
                root: {
                    color: '#aaa', // or 'rgba(0, 0, 0, 1)'
                    '&$active': {
                        color: '#F16E35',
                    },
                    '&$completed': {
                        color: '#F16E35',
                    },
                },
            },
        }
    });

    const {currentStep, finalData} = useContext(multiStepContext);

    function showStep(step) {
        switch(step) {
            case 1 :
                return <ResumeHeadline />
            case 2 :
                return <ResumeInformation />
            case 3: 
                return <ResumeExperience />
            case 4 :
                return <ResumeEducation />
            case 5 :
                return <ResumeCertification />
            case 6 :
                return <ResumePassport />
            case 7 :
                return <ResumeSocialProfile />
        }
    }

    return (
        <div className="addresume-container">
            <div className="stepper-background">
                <MuiThemeProvider theme={muiTheme}>
                    <Stepper activeStep={currentStep - 1} orientation="vertical" className="stepper">
                        <Step>
                            <StepLabel><Typography variant="h5">Headline</Typography></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel><Typography variant="h5">Information</Typography></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel><Typography variant="h5">Work Experience</Typography></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel><Typography variant="h5">Education</Typography></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel><Typography variant="h5">Certification</Typography></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel><Typography variant="h5">Passport</Typography></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel><Typography variant="h5">Social Profile</Typography></StepLabel>
                        </Step>
                    </Stepper>
                </MuiThemeProvider>
            </div>
            <div>
            {showStep(currentStep)}
            </div>
            
            
        </div>
    )
}

export default AddResume;
