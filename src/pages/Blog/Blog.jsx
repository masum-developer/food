import React, { useRef } from 'react';
import { FaFilePdf} from "react-icons/fa";

import ReactPrint from 'react-to-print';

const Blog = () => {
    const ref = useRef()
    
    return (
        <div style={{marginBottom:'20px'}}>
            <header className='text-end container'>

                
                <ReactPrint trigger={()=><FaFilePdf style={{fontSize:'50px'}} className='text-danger'></FaFilePdf>} content = {()=>ref.current} />
            </header>
            <h2 className='text-center'>Blog</h2>

            <div ref={ref}>
            <div  className='container mb-5'>
                <h4>Tell us the differences between uncontrolled and controlled components.</h4>
                <p>
                    Controlled components are React components that have their value controlled by React, typically using state. They require an event handler to update the value and every change to the components value is reflected in the state.

                    Controlled components are typically used in forms where you want to have complete control over the data being entered by the user. You can use these components to enforce specific input formats or to validate data before submitting it to the server.

                    Uncontrolled components are React components that store their own state internally using refs. The state is not controlled by React . Uncontrolled components can be useful in situations where we don't need to enforce specific input formats or validate data before submitting it to the server.
                    Controlled components have their value controlled by React state, while uncontrolled components store their own state using refs.

                    Controlled components require an event handler to update the value, while uncontrolled components do not.
                    Controlled components are typically used in forms where we need to enforce specific input formats or validate data, while uncontrolled components are useful in situations where we don't need that level of control.

                </p>
            </div>
            


            <div className='container mb-5'>
                <h4>How to validate React props using PropTypes?</h4>
                <p>
                    Props are an important mechanism for passing the read only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly  the components may not behave as expected.
                    React provides a useful library called PropTypes that allows you to define the types of props that a component should receive. This library helps you catch bugs and errors early in development by checking that the props are of the expected type.

                    Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if we use propTypes with our components, it helps us to avoid unexpected bugs.


                    App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.


                    Properties validation is a useful way to force the correct usage of the components. This will help during development to avoid future bugs and problems. It also makes the code more readable.

                    React Props validation can be described as a program that can assist developers in avoiding any future bugs or issues. It is a great tool to enforce the correct use of your components. React components have unique properties called propType. PropTypes help you identify bugs by validating data types of the values transmitted through props. However, it is not necessary to create components that use propTypes.

                    propTypes is used to verify the input type for props in react. If you try to put any other type, then it will give you warning in console. For example, if you set name should be string, but you pass something else like number then it will give you warning in console and also the result might get different. After you define patterns in for propTypes you should set default values for props as well.
                </p>
            </div>

            <div className='container mb-5'>
                <h4>Tell us the difference between nodejs and express js.</h4>
                <p>
                    Node.js is a server-side JavaScript runtime environment, while Express.js is a web application framework built on top of Node.js. Here are some of the main differences between Node.js and Express.js:


                    Node.js provides a runtime environment for executing JavaScript code on the server-side, while Express.js is a framework that provides additional tools and features for building web applications with Node.js.

                    Express.js provides a routing system that makes it easy to define routes for handling specific requests and sending back corresponding responses. Node.js provides some basic routing functionality, but it is much less flexible and requires more manual configuration.
                    Express.js provides a middleware system that allows developers to easily add additional functionality to their web applications, such as logging, authentication, and more. Node.js does not provide this level of built-in middleware support.

                    In summary, Node.js provides a powerful runtime environment for executing JavaScript on the server-side, while Express.js provides a web application framework built on top of Node.js that adds additional tools and features for building web applications with Node.js.

                </p>
            </div>

            <div className='container mb-5'>
                <h4>What is a custom hook, and why will you create a custom hook?</h4>
                <p>
                    Custom Hook is a JavaScript function which we create by ourselves when we want to share logic between other JavaScript functions or component.
                    Custom Hooks start with "use". Example: useFetch, useLocalStorage ,useAuthentication

                    You would create a custom hook in order to reuse functionality that is needed in multiple components. By creating a custom hook, you can avoid duplicating code across different components and simplify our code. Custom hooks can also make easier to test code. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
                    The main reason to write a custom hook is for code reusability.
                    It allow us to reuse some piece of code in several parts of my app.

                </p>
            </div>
            
            </div>
            
            <br />
            <br />
           
        </div>
    );
};

export default Blog;