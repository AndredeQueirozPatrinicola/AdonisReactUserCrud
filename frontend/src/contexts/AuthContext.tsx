import axios, { AxiosError } from 'axios';

import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Props } from '../types/Props';
import { UserData } from '../types/UserData';
import { AuthContextData } from '../types/AuthContextData';
import { JwtErrorResponse } from '../types/JwtResponse';
import { AuthErrorMessages } from "../types/AuthErrorMessages";

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: Props) => {
    const navigate = useNavigate();
  
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("token") ? true : false);
    const [ authErrorMessages, setAuthErrorMessages ] = useState<AuthErrorMessages[]>([]);
  
    const login = (userData:UserData) => {
        axios.post('http://localhost:5000/api/auth/login/', {
            email: userData.email, 
            password: userData.password
        })
        .then((res) => {
            const data = res.data
            localStorage.setItem('token', data.token);
            setAuthenticated(true);
            navigate("/");
        })
        .catch((err: AxiosError) => {
            const data: JwtErrorResponse | unknown = err.response?.data;
            if (Array.isArray(data.errors)) {
                setAuthErrorMessages(prev => [...prev, ...data.errors]);
            }
        });
    }
  
    const contextData: AuthContextData = {
      authenticated,
      setAuthenticated,
      login, 
      authErrorMessages
    };
    
    return (
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    );
  }

export {  AuthContext, AuthProvider }