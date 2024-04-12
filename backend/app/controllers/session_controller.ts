import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@adonisjs/auth'
import User from '#models/user'

export default class SessionController {
    async store({ request, auth, response }: HttpContext) {
        /**
         * Step 1: Get credentials from the request body
         */
        const { email, password } = request.only(['email', 'password'])

        /**
         * Step 2: Verify credentials
         */
        const user = await User.verifyCredentials(email, password)
    
        /**
         * Step 3: Login user
         */
        const token = await auth.use('api').login(user)
    
        /**
         * Step 4: Send them to a protected route
         */
        console.log(token) 
      }
    

      async handle(error: unknown, ctx: HttpContext) {
        if (error instanceof errors.E_INVALID_CREDENTIALS) {
          return ctx
            .response
            .status(error.status)
            .send(error.getResponseMessage(error, ctx))
        }
      }    
}