import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-black bg-gradient text-white d-flex flex-lg-row flex-column justify-content-between align-items-center pb-5 px-5' >
        <div>
            <h3>Subscribe</h3>
            <p>Register and get notified about all <br /> the news & updates before it gets too late.</p>
            <span>
                <input className='rounded' style={{padding:'6px'}} type="email" name="" id="" />
                <button className='btn btn-warning'>Subscribe</button>
            </span>
        </div>
        <div >
            <h3>Explore</h3>
            <p>Browse Recipe</p>
            <p>Submit Recipe</p>
            <p>Our Chefs</p>
            <p>Latest News</p>
            
        </div>
        <div >
            <h3>Contact</h3>
            <p>Address:91 BCC Road Wari, Dhaka-1203</p>
            <p>Email:fabrika786@gmail.com</p>
            <p>Phone:01719440550</p>
            <p>Fax:9440550</p>
            
        </div>
      </div>
    );
};

export default Subscribe;