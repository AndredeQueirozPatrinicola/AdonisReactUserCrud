import { createContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


export const AuthContext = createContext({});

export const AuthProvider = ( { children } ) => {

    const navigate = useNavigate();  

	const [ isAuthenticated, setIsAuthenticated ] = useState(
        localStorage.getItem("token") ? true : false
    );
    const [ userData, setUserData ] = useState( {} ); 
    const [ userRoles, setUserRoles ] = useState(
        isAuthenticated ? jwtDecode(localStorage.getItem("token")).roles : null
    );     
    useEffect( () => {
        if (isAuthenticated){
            setUserRoles( jwtDecode(localStorage.getItem("token")).roles );
        }
    }, [isAuthenticated]);


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        setUserData({});
        setIsAuthenticated(false);
        return <Navigate to="/login" />;
    }

    window.addEventListener('remove-tokens', (e) => {
        setIsAuthenticated( false );
    });

    let contextData = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,

        logout: logout, 

        userRoles: userRoles,
        setUserRoles: setUserRoles,
        userData: userData,
        setUserData: setUserData,
    };

	return (
		<AuthContext.Provider value={contextData}>
            {children}
		</AuthContext.Provider>
	);
}