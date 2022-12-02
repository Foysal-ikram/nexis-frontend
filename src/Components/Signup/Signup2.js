import React, { useContext } from 'react';
import './Signup.css';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Loader/UserContext';


const Signup2 = () => {
    const{user , setUser} = useContext(AuthContext)
    const navigate = useNavigate();
    console.log(user)

    window.onload = ()=>{
        navigate('/signup')
       }
    
    const goNext = event => {
        navigate('/signup/3')
    }

    const goPrevious = event => {
        navigate('/signup')
    }
    const getValue= event =>{
        user.PhoneNumber = event.target.value ;
       
    }
    const getValue2 = event =>{
        user.Email  = event.target.value ;    
    }

    return (
        <div className='h-screen	 w-full lg:px-24 px-10 py-10 md:py-16 lg:py-20 h-fit drop-shadow-lg bg-white lg:-mt-20  md:ml-auto md:max-w-lg	'>
            <div>
                <h1 className='md:mb-20 mb-10 font-semibold text-center text-xl	'>SignUp Form</h1>
                <input onBlur={getValue} className="pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone Number" />
                <input onBlur={getValue2} className="pt-20 pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required  placeholder="Email Address" />

            </div>
            <div className='flex mx-auto'>
                <button onClick={goPrevious}
                    className='btn2  p-3 flex items-center '>Back</button>
                <button onClick={goNext}
                    className='btn1 mx-auto  p-3 flex items-center rounded-lg drop-shadow-lg'>Next Step <span className='pl-2'><FaArrowRight /></span> </button>
            </div>
        </div>
    );
};

export default Signup2;