import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }
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
                            <span className='' style={{ width: '35px',marginRight:'10px' }}>
                                {
                                    user && <img title={user.displayName} className='img-fluid rounded-circle' src={user.photoURL} alt="" />
                                }

                            </span>
                            {

                              user ?<Button onClick={handleLogOut} variant="dark">Logout</Button>:
                            <Link to='/login'><Button variant="dark">Login</Button></Link>
                            }

                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;