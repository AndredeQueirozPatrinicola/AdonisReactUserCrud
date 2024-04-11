// import { HttpContext } from '@adonisjs/core/http';
import User from '#models/user'
import {inject} from "@adonisjs/fold";
import { errors } from '@adonisjs/auth'

export default class AuthController {
    
    public async login({ request, auth }: any) {

        const email = request.input("email");
        const password = request.input("password");
        
        const token = await auth.use("api").attempt(email, password, {
            expiresIn: "10 days",
            });
            return token.toJSON();
        }
        
        public async register({ request, auth }: any) {
        
            const email = request.input("email");
            const password = request.input("password");
            const name = request.input("name");
            
            /**
            * Create a new user
            */
            
            const user = new User();
            user.email = email;
            user.password = password;
            user.fullName = name;
            await user.save();
            
            const token = await auth.use("api").login(user, {
                expiresIn: "10 days",
            });
            
            return token.toJSON();
        }

    @inject()
    async handle(error:HttpContext ,ctx: HttpContext) {
        return ctx
            .response
            .status(400)
            .send({
                "error": errors.E_INVALID_CREDENTIALS,
                "detail": "Invalid Email or Password"
            })
    }
}