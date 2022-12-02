import React from 'react';
import img from '../../Resources/logo1.png'

const Header = () => {
    return (
        <div className='p-6'>
            <img src={img} alt="logo" className='' width={150} />
        </div>
    );
};

export default Header;