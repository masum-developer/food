import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
    return (

        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <span className='display-6'>Chefs Corner</span>
                        </Nav>
                        <Nav className="mx-auto">
                            <NavLink className={({ isActive }) => (isActive ? 'text-success' : 'text-dark')} to="/">Home</NavLink>
                            <NavLink className="ms-5" to="/blog">Blog</NavLink>
                            <NavLink className="ms-5" to="/profile">Profile</NavLink>

                        </Nav>
                        <Nav>
                            <Button variant="dark">Logout</Button>:
                            <Link to='/login'><Button variant="dark">Login</Button></Link>
                            <span className='' style={{ width: '35px' }}>
                                <img className='img-fluid rounded-circle' src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg" alt="" />
                            </span>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;