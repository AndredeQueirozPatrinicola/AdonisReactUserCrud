import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'


export default class UsersController {

  async index({}: HttpContext) {
    const users = await User.all()
    return users
  }

  async store({ request }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const user = await User.create(data)
    return user
  }

  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    return user
  }

  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['fullName', 'email', 'password'])
    await user.merge(data)
    return user
  }

  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}