import { LoginForm } from "../components/LoginForm"
import {LoginTitle} from "../components/LoginTitle"


export const Login = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <LoginTitle/>
            <LoginForm/>
        </div>
    )
}