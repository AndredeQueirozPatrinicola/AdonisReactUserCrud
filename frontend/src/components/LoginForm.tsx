import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { UserData } from "../types/UserData"
import { FormInput } from "./FormInput"
import { FormButton } from "./FormButton"
import { ErrorMessagesBox } from "./ErrorMessagesBox"

const initialValue: UserData = {
    email:"",
    password:""
}

export const LoginForm = () => {
    const [ formState, setFormState ] = useState(initialValue)
    const { login, authErrorMessages } = useContext(AuthContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev, 
            [name]: value
        }));
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(formState.email !== '' && formState.password !== ''){
            login(formState)  
        }
    }

    return (
            <form className="flex flex-col w-1/3">

                <FormInput
                    placeHolder="Email address"
                    inputName="email"
                    inputType="text"
                    handleChange={handleChange}
                />

                <FormInput
                    placeHolder="Password"
                    inputName="password"
                    inputType="password"
                    handleChange={handleChange}
                />

                <FormButton
                    handleSubmit={handleSubmit}
                    buttonValue="Login"
                />

                <ErrorMessagesBox
                    authErrorMessages={authErrorMessages}
                />
            </form>  
    )
}