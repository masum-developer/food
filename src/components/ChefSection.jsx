import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefSection = ({chef}) => {
    console.log(chef?.chef_name)
    
    return (
        <div>

            <Card style={{ width: '18rem' }} className='d-flex align-items flex-column margin-top'>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <img style={{ width: '100px' }} src={chef?.chef_picture} alt="" />
                    <Card.Title>{chef?.chef_name}</Card.Title>
                    <Card.Text>
                        <p>Years of Experience:{chef.years_of_experience}</p>
                        <p>Number of recipes:{chef.number_of_recipes}</p>
                        <p>Likes:{chef.likes}</p>
                    </Card.Text>
                    <Link to={`/recipe/${chef.id}`}><Button variant="primary">View Recipe</Button></Link>
                    
                </Card.Body>
            </Card>
        </div>

    );
};

export default ChefSection;