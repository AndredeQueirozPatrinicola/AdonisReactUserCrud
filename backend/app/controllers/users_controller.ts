import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import {
  createUserValidator,
  updateUserValidator
} from '#validators/user'


export default class UsersController {

  async index({}: HttpContext) {
    const users = await User.all()
    return users
  }

  async store({ request }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const payload = await createUserValidator.validate(data)
    const user = await User.create(payload)
    return user
  }

  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    return user
  }

  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['fullName', 'email', 'password'])
    const payload = await updateUserValidator.validate(data)
    await user.merge(payload)
    return user
  }

  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}