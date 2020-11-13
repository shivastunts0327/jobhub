import React from "react";
import AddResume from "./AddResume";
import StepContext from './StepContext';
import Footer from "./Footer";
import HeaderLogin from "./HeaderLogin";


const Resume = () => {
    return (
        <div>
            <HeaderLogin />
            
            <StepContext>
                <AddResume />
            </StepContext>

            <Footer />
        </div>
    )
}

export default Resume;

