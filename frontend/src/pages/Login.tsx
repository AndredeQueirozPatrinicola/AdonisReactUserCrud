import { LoginForm } from "../components/LoginForm"
import { FormTitle } from "../components/FormTitle"
import { NavLink } from "react-router-dom";

export const Login = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-28">
            <FormTitle
                mainText="Login to your account!"
                questionText="Still don't have an account?"
            >
                <NavLink
                    className='text-[#863ec9] font-bold'
                    to='/signup'
                >
                    Signup!
                </NavLink>
            </FormTitle>
            <LoginForm/>
        </div>
    )
}