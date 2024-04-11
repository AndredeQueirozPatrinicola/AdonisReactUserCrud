import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { errors } from '@adonisjs/auth'


export default class SessionController {
    async store({ request, auth, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        const user = await User.verifyCredentials(email, password)
      }

  async handle(ctx: HttpContext) {
    return ctx
        .response
        .status(400)
        .send({
            "error": errors.E_INVALID_CREDENTIALS,
            "detail": "Invalid Email or Password"
        })
  }
}