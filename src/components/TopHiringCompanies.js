import React from 'react';
import Slider from "react-slick";
import infosys from '../../public/images/companies/infosys.svg';
import intel from '../../public/images/companies/intel.svg';
import mindtree from '../../public/images/companies/mindtree.svg';
import tcs from '../../public/images/companies/tcs.svg';
import techM from '../../public/images/companies/techM.svg';
import walmart from '../../public/images/companies/walmart.svg';
import orangeLine from '../../public/images/companies/orange-line.svg';

const TopHiringCompanies = () => {
    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: false,
        swipeToSlide: false,
        swipe: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    
    return (
        <div className="hiring-companies">
            <div className="hiring-companies-headline">
                <h1>TOP HIRING COMPANIES</h1>
                <img src={orangeLine}></img>
            </div>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={infosys} className="companies-styling"></img>
                    </div>
                    <div>
                        <img src={intel} className="companies-styling"></img>
                    </div>
                    <div>
                        <img src={mindtree} className="companies-styling"></img>
                    </div>
                    <div>
                        <img src={tcs} className="companies-styling"></img>
                    </div>
                    <div>
                        <img src={techM} className="companies-styling"></img>
                    </div>
                    <div>
                        <img src={walmart} className="companies-styling"></img>
                    </div>
                </Slider>
            </div>
        </div>
    )
};


export default TopHiringCompanies;