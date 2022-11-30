import {z} from 'zod'

export const userSchema = z.object({
    body: z.object({
        username: z.string({required_error: 'Username is required'}).min(2, 'Username must be longer'),
        password: z.string({required_error: 'Password is required'}).min(2, 'Password must be longer'),
        email: z.string({required_error: 'Email is required'}).min(2, 'Email must be longer'),
        role: z.enum(['ADMIN', 'USER'])
    })
})