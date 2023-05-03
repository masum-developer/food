import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-black bg-gradient text-white d-flex justify-content-between align-items-center pb-5 px-5' style={{height:'300px'}}>
        <div style={{width:'33%'}}>
            <h3>Subscribe</h3>
            <p>Register and get notified about all <br /> the news & updates before it gets too late.</p>
            <span>
                <input className='rounded' style={{padding:'6px'}} type="email" name="" id="" />
                <button className='btn btn-warning'>Subscribe</button>
            </span>
        </div>
        <div style={{width:'33%'}} >
            <h3>Explore</h3>
            <p>Browse Recipe</p>
            <p>Submit Recipe</p>
            <p>Our Chefs</p>
            <p>Latest News</p>
            
        </div>
        <div style={{width:'33%'}}>
            <h3>Contact</h3>
            <p>Register and get notified about all the news & updates before it gets too late.</p>
            
        </div>
      </div>
    );
};

export default Subscribe;