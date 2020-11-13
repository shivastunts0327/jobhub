import React from "react";
import CountUp from "react-countup";
import liveJobs from '../../public/images/count/live-jobs.svg';
import candidates from '../../public/images/count/candidate.svg';
import resumes from '../../public/images/count/resumes.svg';
import companies from '../../public/images/count/companies.svg';


const IHSCount = () => {
    return (
        <div className="ihs-count">
            <div className="count-center">
                <img src={liveJobs}></img>
                <p>Live Jobs</p>
                <div className="count-flex">
                    <h1>
                        <CountUp start={0} end={450} duration={5}/>
                    </h1>
                    <p className="plus">+</p>
                </div>
            </div>
            <div>
                <img src={resumes}></img>
                <p>Candidates</p>
                <div className="count-flex">
                    <h1>
                        <CountUp start={0} end={5650} duration={5}/>
                    </h1>
                    <p className="plus">+</p>
                </div>
            </div>
            <div>
                <img src={candidates}></img>
                <p>Advisors</p>
                <div className="count-flex">
                    <h1>
                        <CountUp start={0} end={500} duration={5}/>
                    </h1>
                    <p className="plus">+</p>
                </div>
            </div>
            <div>
                <img src={companies}></img>
                <p>Companies</p>
                <div className="count-flex">
                    <h1>
                        <CountUp start={0} end={450} duration={5}/>
                    </h1>
                    <p className="plus">+</p>
                </div>
            </div>
        </div>
    );
};

export default IHSCount;