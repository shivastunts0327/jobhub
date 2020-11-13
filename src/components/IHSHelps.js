import React from "react";
import helpsbg from '../../public/images/helps/helpsBg.svg';
import whiteLine from '../../public/images/helps/whiteLine.svg';
import helps1 from '../../public/images/helps/helps1.svg';
import helps2 from '../../public/images/helps/helps2.svg';
import helps3 from '../../public/images/helps/helps3.svg';

const IHSHelps = () => {
    return (
        <div className="orangehelps">
            <div className="helps-heading">
                <h1 className="helps-headline">HOW IHS HELPS YOU</h1>
                <img src={whiteLine}></img>
            </div>
            <div className="helps-body">
                <div>
                    <img src={helps1}></img>
                    <h2>Quick Apply</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo voluptate necessitatibus nulla quia iusto!</p>
                </div>
                <div>
                    <img src={helps2}></img>
                    <h2>AI Based Job Mapping</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo voluptate necessitatibus nulla quia iusto!</p>
                </div>
                <div>
                    <img src={helps3}></img>
                    <h2>Career Advisory Forum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo voluptate necessitatibus nulla quia iusto!</p>
                </div>
            </div>
            <img src={helpsbg} className="helpsbg"></img>
        </div>
    )
}

export default IHSHelps;