import axios, { AxiosError } from 'axios';

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

import { FormInput } from "./FormInput"
import { FormButton } from "./FormButton"
import { ErrorMessagesBox } from "./ErrorMessagesBox"

import { SignupUserData } from "../types/UserData"
import { JwtErrorResponse } from '../types/JwtResponse';

import { passwordRegex } from "../utils/passwordRegex"

const initialValue: SignupUserData = {
    fullName: '',
    email: '',
    password: '',
    password_confirmation: ''
}

export const SignupForm = () => {
    const [ formState, setFormState ] = useState(initialValue)
    const [ fieldErrors, setFieldErrors ] = useState(initialValue)
    const { authErrorMessages } = useContext(AuthContext)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev, 
            [name]: value
        }));
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/accounts/users/', {
            fullName: formState.fullName,
            email: formState.email, 
            password: formState.password,
            password_confirmation: formState.password_confirmation 
        })
        .then((res) => {
            const data = res.data
            console.log(data)
        })
        .catch((err: AxiosError) => {
            const data: JwtErrorResponse | unknown = err.response?.data;
            if (Array.isArray(data.errors)) {
                const jwtErrorData = data 
                jwtErrorData?.errors.map((value, _) => {
                    if (value.field) {
                        setFieldErrors((prev) => ({
                            ...prev,
                            [value.field]: value.message 
                        }));
                    }
                });
            }
        });
    }


    useEffect(() => {
        if (formState.password !== formState.password_confirmation) {
            setFieldErrors((prev) => ({
                ...prev, 
                password_confirmation: 'Passwords do not match!'
            }));
        } else {
            setFieldErrors((prev) => ({
                ...prev, 
                password_confirmation: ''
            }));
        }
    
        if (!passwordRegex.test(formState.password) && formState.password != '') {
            setFieldErrors((prev) => ({
                ...prev,
                password: 'Password must contain at least one number, one symbol, and one uppercase letter.'
            }));
        } else {
            setFieldErrors((prev) => ({
                ...prev,
                password: ''
            }));
        }
    }, [formState]);


    return (
            <form className="flex flex-col w-1/3">

                <FormInput
                    placeHolder="Full Name"
                    inputName="fullName"
                    inputType="text"
                    handleChange={handleChange}
                    fieldError={fieldErrors.fullName}
                />

                <FormInput
                    placeHolder="Email address"
                    inputName="email"
                    inputType="text"
                    handleChange={handleChange}
                    fieldError={fieldErrors.email}
                />

                <FormInput
                    placeHolder="Password"
                    inputName="password"
                    inputType="password"
                    handleChange={handleChange}
                    fieldError={fieldErrors.password}
                />

                <FormInput
                    placeHolder="Repeat Password"
                    inputName="password_confirmation"
                    inputType="password"
                    handleChange={handleChange}
                    fieldError={fieldErrors.password_confirmation}
                />

                <FormButton
                    handleSubmit={handleSubmit}
                    buttonValue="Signup"
                />

                <ErrorMessagesBox
                    authErrorMessages={authErrorMessages}
                />
            </form>  
    )
}