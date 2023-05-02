import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const recipe = useLoaderData();
    console.log(recipe)
    return (
        <div>
            <h1>mmmmmmmmmmm</h1>
        </div>
    );
};

export default ChefRecipe;