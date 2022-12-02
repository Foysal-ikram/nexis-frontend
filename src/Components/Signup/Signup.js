import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import MainPage from './MainPage';

const Signup = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <Toaster></Toaster>
            <div className='hidden md:block'><MainPage></MainPage></div>
            <div><Outlet></Outlet></div>

        </div>
    );
};

export default Signup;