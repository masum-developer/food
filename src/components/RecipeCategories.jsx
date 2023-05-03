import React from 'react';

const RecipeCategories = () => {
    return (
        <div className='py-5'>
            <h2 className='text-center'>Recipe Categories</h2>
        <div className='d-flex justify-content-around align-items-center'>
            <img style={{width:'100px',height:'100px'}} className='rounded-circle' src='https://i.ibb.co/q1B9b7H/circle1.jpg' alt="" />
            <img style={{width:'100px',height:'100px'}} className='rounded-circle' src='https://i.ibb.co/9sfxhpm/circle2.jpg' alt="" />
            <img style={{width:'100px',height:'100px'}} className='rounded-circle' src='https://i.ibb.co/y4Qt28x/circle3.jpg' alt="" />
            <img style={{width:'100px',height:'100px'}} className='rounded-circle' src='https://i.ibb.co/fSWGvMN/circle4.jpg' alt="" />
            <img style={{width:'100px',height:'100px'}} className='rounded-circle' src='https://i.ibb.co/mCsWkX9/circle5.jpg' alt="" />
        </div>
        </div>
    );
};

export default RecipeCategories;