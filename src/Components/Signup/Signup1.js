import React, { useContext } from 'react';
import './Signup.css';
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Loader/UserContext';

const Signup1 = () => {
    const{user , setUser} = useContext(AuthContext)
    const navigate = useNavigate() ;
    const goNext=()=>{
        navigate('/signup/2')
    }

    const getValue= event =>{
        const firstName = event.target.value ;
        user.Firstname = firstName ; 
       
    }
    const getValue2= event =>{
        user.Lastname = event.target.value ; 
        
    }

    return (
        <div className='h-screen  w-full lg:px-24 px-10 py-10 md:py-16 lg:py-20 h-fit drop-shadow-lg bg-white lg:-mt-20  md:ml-auto md:max-w-lg	'>
            <div>
                <h1 className='md:mb-20 mb-10 font-semibold text-center text-xl	'>SignUp Form</h1>
                <input onBlur={getValue} className="pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write First Name"/>
                <input onBlur={getValue2} className="pt-20 pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write Last Name"/>
  
            </div>
            <div className='flex mx-auto'>
                <button onClick={goNext}
                className='btn1 mx-auto  p-3 flex items-center rounded-lg drop-shadow-lg'>Next Step <span className='pl-2'><FaArrowRight/></span> </button>
            </div>
            <p className='text-xs text-center pt-10'>Already have an account ? <Link to={'/login'}> <span className='text-sm color2 text-blue-500 underline underline-offset-8'>LOGIN </span></Link></p>
        </div>
    );
};

export default Signup1;