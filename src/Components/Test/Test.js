import React from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
    const navigate=useNavigate() ;
    fetch('https://foysalikram-server-side.vercel.app/list', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('nexis-token')}`
            },
            
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                
                return navigate('/');
            }
        })
        .then(data => {
            console.log(data);
        })
        
    return (
        
        <div>
            aa
        </div>
    );
};

export default Test;