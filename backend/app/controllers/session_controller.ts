import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@adonisjs/auth'
import User from '#models/user'

export default class SessionController {
    async index({ request }: HttpContext) {
      return {
        status: 200
      };
    }

    async store({ request, auth }: HttpContext) {
        const { email, password } = request.all()
        const user = await User.verifyCredentials(email, password)
        const token = await User.accessTokens.create(user)
        return {
          token,
          user: user.id
        }
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

