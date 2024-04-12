import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@adonisjs/auth'
import User from '#models/user'

export default class SessionController {
    async store({ request, auth }: HttpContext) {
        const { email, password } = request.all()
        const user = await User.verifyCredentials(email, password)
      
        return await auth.use('jwt').generate(user)
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

