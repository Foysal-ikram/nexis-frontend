import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [user , setUser] = useState({}) ;

    const authInfo = { user,setUser} ;
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;