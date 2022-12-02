import React, { useContext, useState } from 'react';
import './Signup.css';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../Loader/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const Signup3 = () => {
  const [error , setError] = useState(null)
  const { user, setUser } = useContext(AuthContext)
  console.log(user)

  window.onload = () => {
    navigate('/signup')
  }


  const navigate = useNavigate();

  const goPrevious = () => {
    navigate('/signup/2')
  }
  const getValue = event => {
    const password = event.target.value ;
    console.log(password)
    if(password.length > 7){
     user.Password = event.target.value;
    }
    return setError('error')

   

  }
  const signUp = () => {
    if(user.Password.length < 8){
      return 
    }

    console.log(user)
    fetch('https://foysalikram-server-side.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if(res){
          toast.success('Succesfully signed up')
        navigate('/signup')
        }

      })


  }

  return (
    <div className='h-screen	 w-full  lg:px-24 px-10  md:py-16 lg:py-20 h-full  drop-shadow-lg bg-white lg:-mt-20  md:ml-auto md:max-w-lg	'>
     
      <div>
        <h1 className='md:mb-20 mb-10 font-semibold text-center text-xl	'>SignUp Form</h1>
        <input onBlur={getValue} className="pl-6 py-2 px-3 appearance-none  border-b-2 border-gray-200	 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" />
       {error && <p className='text-xs pl-6	text-slate-400	'>Your password must be at least 8 characters</p>}
      </div>
      <div className='flex mx-auto'>
        <button
          onClick={goPrevious}
          className='btn2 p-3 flex items-center '>Back
        </button>
        <button
          onClick={signUp}
          className='btn1 mx-auto  px-4 flex items-center rounded-lg drop-shadow-lg '> SignUp
        </button>
      </div>
    </div>
  );
};

export default Signup3;