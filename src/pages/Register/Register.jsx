import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error,setError] = useState('');
    const {createUser,logOut,userProfile,googleLogin,githubLogin} = useContext(AuthContext);
    const [accepted,setAccepted] = useState(false)
    const navigate = useNavigate();
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photo,email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setError('')
              userProfile(name,photo)
              .then(r=>console.log(r))
              .catch(error=>console.log(error))
              logOut();
              navigate('/login');
              
        
        })
        .catch(error=>{
            setError(error.message)
        })
        
        form.reset();
    }
    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    const handleGithubLogin = ()=>{
        githubLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    return (
        <Container className='w-25 mx-auto pb-5'>

            <h3>Please Register</h3>
            <Form onSubmit = {handleRegister}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" required />

                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-1 text-dark" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleAccepted}
                     type="checkbox"
                     name="accept"
                     label={<>Accept <Link  to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="dark" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <p className='text-danger'>{error}</p>
            <Button onClick={handleGoogleLogin} className='mb-2 mt-2' variant="outline-info"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubLogin} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                <br />
                <br />

        </Container>
    );
};

export default Register;