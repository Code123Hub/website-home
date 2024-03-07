
import React from 'react'
import Slider from 'react-slick';
import {sponsorCompany} from '../../data/SponsorCompany';
import { Card } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMapLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

function Sponsors() {

    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
  return (
    <div>
        <div className="bg-white p-2 overflow-hidden">
                
               
                <div className='p-7 relative px-4 overflow-hidden'>
                    <Slider {...settings}>
                        {sponsorCompany.map((company, index) => (
                            <div key={index} className='w-full  sm:w-full md:w-full lg:w-1/4 overflow-hidden'>
                                <Card key={index} sx={{ width: '250px', height: '300px' }} style={{ margin: '15px' }} >
                                    <div className='grid place-items-center mt-5 overflow-hidden'>
                                        <img src={company.logo} alt={company.comapnyName} className='rounded-full' />
                                    </div>
                                    <div className='p-5 items-center overflow-hidden'>
                                        <h2 className='text-blue-700 mt-2 text-center'>{company.comapnyName}</h2>
                                        <div className='mt-2 text-gray-400 text-center overflow-hidden'>
                                            <FontAwesomeIcon icon={faMapLocationDot} /> {company.location}
                                        </div>
                                      
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

                             
    </div>
  )
}

export default Sponsors