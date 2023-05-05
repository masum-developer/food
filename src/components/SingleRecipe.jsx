import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';



const SingleRecipe = ({rec}) => {
    const [accepted,setAccepted] = useState(true)
    
    const {recipe_name,recipe_image,ingredients,cooking_method,rating} = rec;

    const notify = (recipe_name) =>{
        setAccepted(false)
        toast(`I like ${recipe_name}`);
    } 
    return (
        <div className='py-5 mb-5'>

            <Card style={{height:'49rem'}} className='d-flex align-items flex-column'>
                <Card.Img variant="top" src={recipe_image} style={{height:'180px'}} />
                <Card.Body>
                    
                    <Card.Title>{recipe_name}</Card.Title>
                    <Card.Text>
                        <p>Recipe:</p>
                        <p>{cooking_method}</p>
                    
                    </Card.Text>
                    <Card.Text>
                    <p>Ingredients:</p>
                        <p>{ingredients}</p>
                    </Card.Text>
                    <Card.Text>
                    <p>Rating: { rating}</p>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button disabled={!accepted} onClick={()=>notify(recipe_name)} className='btn btn-dark w-100'>Favorite</Button>
            <Toaster />
        </div>
    );
};

export default SingleRecipe;