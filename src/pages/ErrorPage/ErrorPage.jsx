import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const ErrorPage = () => {


    const { error, status } = useRouteError()
    return (
        <div>
            <Header></Header>
            <section>
            <div className='d-flex w-100 container justify-content-evenly mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 h-25 text-danger">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>

                <div className=''>
                    <h2 className=''>
                        <span className=''>Error</span> {status || 404}
                    </h2>
                    <p className=''>
                        {error?.message}
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </div>
    )


};

export default ErrorPage;