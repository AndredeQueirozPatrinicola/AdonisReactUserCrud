
import { SignupForm } from "../components/SignupForm"
import { FormTitle } from "../components/FormTitle"
import { NavLink } from "react-router-dom";

export const Signup = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-28">
            <FormTitle
                mainText="Create an account!"
                questionText="Already have an account?"
            >
                <NavLink
                    className='text-[#863ec9] font-bold'
                    to='/login'
                >
                    Login!
                </NavLink>
            </FormTitle>
            <SignupForm/>
        </div>
    )
}