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
                                src="slider1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            style={{height:'450px'}}
                                className="img-fluid w-100"
                                src="slider3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                chefData.map(chef=><ChefSection chef={chef} key={chef.id}></ChefSection>)
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