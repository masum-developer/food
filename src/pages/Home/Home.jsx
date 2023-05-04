import React, { useState } from 'react';
import {Carousel, Container} from 'react-bootstrap';
import ChefSection from '../../components/ChefSection';
import { useLoaderData } from 'react-router-dom';
import RecipeCategories from '../../components/RecipeCategories';
import Subscribe from '../../components/Subscribe';

const Home = () => {
    const [chefInfo,setChefInfo]= useState([])
    const chefData = useLoaderData()
    console.log(chefData);
    return (
        <>
        <Container className='mb-5'>
          <div>
          <Carousel slide={false}>
                        <Carousel.Item>
                            <img style={{height:'450px'}}
                                className="img-fluid w-100"
                                src="slide1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Pepperoni</h3>
                                <p>Pepperoni is a spicy American sausage made from cured beef and pork, typically seasoned with paprika or chili pepper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            style={{height:'450px'}}
                                className="img-fluid w-100"
                                src="slider2.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Burger</h3>
                                <p>A delicious burger made with a juicy and flavorful ham patty, topped with fresh veggies and melted cheese.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            style={{height:'450px'}}
                                className="img-fluid w-100"
                                src="slide4.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Vegetables</h3>
                                <p>
                                Plant-based cuisine that's flavorful, healthy, and environmentally friendly.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

          </div>
          
          <br />
          <br />  
      <div>
      <h1>
            American Chefs
            </h1>
            
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {
              chefData && chefData.map(chef=><ChefSection chef={chef} key={chef.id}></ChefSection>)
            }

            </div>
      </div>
      <div>
        <RecipeCategories></RecipeCategories>
      </div>
      
      </Container>
      <Subscribe></Subscribe>
        
            </>
        
    );
};

export default Home;