



// Footer.js
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faMailBulk, faMapLocation, faShare, faShareAltSquare, faShareAlt, faCopy, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faDiscord, faPinterest, faYoutube, faBluetooth, faWeixin, faWhatsapp, faThreads, faSnapchat } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

    const [email, setEmail] = useState('');
  

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
       console.log("hello")
    };

    return (

        <footer className=" text-white mt-8 px-12">
            <div className=" ">
               
                <div className="flex flex-wrap justify-between p-8 bg-slate-900">
                    <div className=" md:w-1/4 mb-8  ">
                        <h3 className="text-xl font-bold text-white">HEAD OFFICE</h3>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faPhone}  /> (877)628-0740 871-5196</p>
                        <a href="mailto:info@jobscanadafair.com" className='text-white mt-2 text-sm p-1'> <FontAwesomeIcon icon={faEnvelope}  />ipr@gmail.com</a>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faMapLocationDot}  /> Green park, New Delhi, Uttar Pradesh.</p>

                    </div>

                    <div className="md:w-1/4 mb-8">
                        <h2 className="text-xl font-bold text-white">
                            Testimonials</h2>
                        <ul>
                            <li className='text-white   mt-2 text-sm'> Video</li>
                            <li className='text-white   mt-2 text-sm'> Video</li>
                            <li className='text-white   mt-2 text-sm'> Video</li>
                            <li className='text-white   mt-2 text-sm'> Video</li>
                        </ul>
                    </div>



                    <div className=" md:w-1/4 mb-8">
                        <h3 className="text-xl font-bold text-white">REGISTRATIONS</h3>
                        <ul>
                        <li className='text-white   mt-2 text-sm'> Video</li>
                        <li className='text-white   mt-2 text-sm'> Video</li>
                        <li className='text-white   mt-2 text-sm'> Video</li>
                        <li className='text-white   mt-2 text-sm'> Video</li>

                        </ul>
                    </div>

                    {/* <div className=" md:w-1/4 mb-8 text-black">
                        <h3 className="text-xl font-bold text-white">STAY UPDATED</h3>

                        <form onSubmit={handleSubmit} className=" p-2 bg-white rounded-lg mt-3 w-56 h-36">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border border-gray-500 
                                rounded-lg mt-5"
                               
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-3"
                            >
                                Subscribe
                            </button>
                        </form>



                    </div> */}
                </div>
                <div className="p-2 text-left  text-gray-500 text-sm  font-semibold flex justify-between">
                    <p >COPYRIGHT © 2020 - The IPR Gorilla - ALL RIGHTS RESERVED.
                    </p>
                    <div className='item-right space-x-1' >
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faWeixin} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faPinterest} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>

            </div>
            
        </footer>
    );
};

export default Footer;