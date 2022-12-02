import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../Signup/Signup.css';
import Swal from 'sweetalert2'


const Login = () => {
    const getValue = () => {

    }
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email) 

        fetch(`https://foysalikram-server-side.vercel.app/users?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                 console.log(data)
                if(data.Password === password){
                    fetch('http://localhost:5000/jwt', {
                        method: 'POST',
                                          
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                           localStorage.setItem('nexis-token', data.token);
                        });
                        Swal.fire(
                            'Congratulation',
                            'You have loged in!',
                            'success'
                          )
                }
                })
    }

    return (
        <div className='grid md:grid-cols-2'>
            <Toaster></Toaster>
            <div>

            </div>
            <form onSubmit={handleLogin} className='h-screen	 w-full lg:px-24 px-10 py-10 md:py-16 lg:py-20 h-fit drop-shadow-lg bg-white lg:-mt-20  md:ml-auto md:max-w-lg	'>
                <div>
                    <h1 className='md:mb-20 mb-10 font-semibold text-center text-xl	'>Login Form</h1>
                    <input name='email' className="pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email  Address" />
                    <input name='password' className="pt-20 pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" />

                </div>
                <div className="form-control mt-2">
                    <input type="submit" className='btn1 mx-auto  p-3 px-4 cursor-pointer flex items-center rounded-lg drop-shadow-lg' value="Login" />
                </div>
                <p className='text-xs pt-10 text-center'>Did not have an account ? <Link to={'/signup'}> <span className='text-sm color2 text-blue-500 underline underline-offset-8'>SIGNUP HERE !</span> </Link></p>
            </form>
        </div>
    );
};

export default Login;