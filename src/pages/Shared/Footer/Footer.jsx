import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='fixed-bottom bg-dark text-white d-flex justify-content-around align-items-center' style={{height:'70px'}}>
            <p>All rights reserved. Chefs Corner</p>
            <span>
                
                <FaFacebook className="me-2"></FaFacebook>
                <FaTwitter className="me-2"></FaTwitter>
                <FaInstagram></FaInstagram>
            </span>
        </div>
    );
};

export default Footer;