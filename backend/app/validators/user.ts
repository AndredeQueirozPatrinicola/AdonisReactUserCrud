import vine from '@vinejs/vine'
import { uniqueRule } from '../rules/unique.js'


export const createUserValidator = vine.compile(
    vine.object({
      fullName: vine.string().minLength(3),
      email: vine
        .string()
        .email()
        .use(
            uniqueRule({ 
                table: 'users', 
                column: 'email' 
            })
        ),
      password: vine
        .string()
        .minLength(8)
        .maxLength(32)
        .confirmed()
    })
)


export const updateUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().minLength(3),
        email: vine
            .string()
            .trim()
            .email()
            .use(
                uniqueRule({ 
                    table: 'users', 
                    column: 'email' 
                })
            ),
    })
)
