import axios, { AxiosError } from 'axios';
import { baseURL } from '../api/baseUrl';
import { fetchData } from '../api/fetchData';

import { createContext, ReactNode, useEffect, useState } from 'react'

import { useNavigate, Navigate } from 'react-router-dom';

import { Props } from '../types/Props';
import { UserData } from '../types/UserData';
import { UserInfos as IUserinfos } from '../types/UserInfos';
import { AuthContextData } from '../types/AuthContextData';
import { JwtErrorResponse } from '../types/JwtResponse';
import { AuthErrorMessages } from "../types/AuthErrorMessages";

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: Props) => {
    const navigate = useNavigate();
  
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("token") ? true : false);
    const [authErrorMessages, setAuthErrorMessages ] = useState<AuthErrorMessages[]>([]);
    const [userInfos, setUserInfos] = useState<IUserinfos>({} as IUserinfos)

    const login = (userData:UserData) => {
        axios.post(`${baseURL}/api/auth/login/`, {
            email: userData.email, 
            password: userData.password
        })
        .then((res) => {
            const data = res.data
            
            localStorage.setItem('token', data.token.token);
            localStorage.setItem('user', data.user)

            setAuthenticated(true);
            setAuthErrorMessages([])
            navigate("/");
        })
        .catch((err: AxiosError) => {
            const data: JwtErrorResponse | unknown = err.response?.data;
            if (Array.isArray(data.errors)) {
                setAuthErrorMessages([...data.errors]);
            }
        });
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setAuthenticated(false);
        setAuthErrorMessages([])
        
        return <Navigate to="/login" />;
    }

    useEffect(() => {
      const getUserData = async (id: string) => {
        await fetchData(`/api/accounts/users/me/${id}`)
          .then((res) => {
            const {id, fullName, email} = res.data
            setUserInfos({
              id,
              fullName,
              email
            })
          })
          .catch((err: AxiosError) => {
            console.error(err)
          })
      }
      if(authenticated){
        const userId = localStorage.getItem('user')
        console.log(localStorage.getItem('user'))
        if(userId){
          getUserData(userId)
        }
      }
    }, [authenticated])
  
    const contextData: AuthContextData = {
      authenticated,
      setAuthenticated,

      login, 
      logout,

      authErrorMessages,
      setAuthErrorMessages,

      userInfos      
    };
    
    return (
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    );
  }

export {  AuthContext, AuthProvider }