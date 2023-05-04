import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../../components/SingleRecipe';
import LazyLoad from 'react-lazy-load';

const ChefRecipe = () => {
    const recipe = useLoaderData();
    const {chef_picture,chef_name,biography,likes,number_of_recipes,years_of_experience,recipes} =recipe
    console.log(recipe)
    return (
        <div>
        
            <div className='d-flex bg-info'>
                <div style={{width:'48%'}} >
                <LazyLoad  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                <img className='img-fluid' style={{height:'305px',width:'100%'}} src={chef_picture} alt="" />
                </LazyLoad>
                </div>
                <div style={{width:'48%'}} className='pt-5 ps-3'>
                    <h2>{chef_name}</h2>
                    <p>{biography}</p>
                    <p>Likes:{likes}</p>
                    <p>No of Recipes:{number_of_recipes}</p>
                    <p>Eperience:{years_of_experience}</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {
                   recipes && recipes.map(rec=><SingleRecipe key={rec.id} rec={rec}></SingleRecipe>)
                }
            </div>
            </div>

    );
};

export default ChefRecipe;