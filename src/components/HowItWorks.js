import React from "react";
import aboutUsFrame2Bg from "../../public/images/about/aboutUsFrame2Bg.svg";
import orangeLine from "../../public/images/about/orangeLine.svg";

const HowItWorks = () => {
    return (
        <div className="aboutus-frame2-grey-bg">
            <div className="aboutus-frame2-heading">
                <h1>HOW IT WORKS</h1>
                <img src={orangeLine}></img>
            </div>
            <div className="aboutus-frame2-bottom">
                <div>
                    <img src={aboutUsFrame2Bg} className="aboutUsFrame2Bg"></img>
                </div>
                <div className="aboutus-frame2-p">
                    <div className="aboutus-frame2-bottom-padding">
                        <h2>Create Account</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over you need to be sure there isn't anything embarrassing.</p>
                    </div>
                    <div className="aboutus-frame2-bottom-padding">
                        <h2>Search your job</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over you need to be sure there isn't anything embarrassing.</p>
                    </div>
                    <div className="aboutus-frame2-bottom-padding">
                        <h2>Apply for job</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over you need to be sure there isn't anything embarrassing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;