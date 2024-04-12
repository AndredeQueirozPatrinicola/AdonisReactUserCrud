import vine from '@vinejs/vine'



export const createUserValidator = vine.compile(
    vine.object({
      fullName: vine.string().minLength(3),
      email: vine.string().trim().email(),
      password: vine.string().trim().minLength(8)
    })
)


export const updateUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().minLength(3),
        email: vine.string().trim().email(),
    })
)
