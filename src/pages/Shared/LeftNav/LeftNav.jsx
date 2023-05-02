import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [cuisines,setCuisines] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/cuisines')
        .then(res=>res.json())
        .then(data=>setCuisines(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h4>All Cuisine</h4>
            <div className='ps-4'>
            {
                cuisines.map(cuisine=><p key={cuisine.id}> <Link 
                    to={`/cuisine/${cuisine.id}`} className='text-decoration-none text-black'>{cuisine.name}</Link> </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;