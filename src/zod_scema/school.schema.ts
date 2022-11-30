import {z} from 'zod'

export const studentSchema = z.object({
    body: z.object({
        name: z.string(),
        age: z.number(),
        major: z.string(),
    })
})

export const classSchema = z.object({
    body: z.object({
        name: z.string(),
    })
})

export const teacherSchema = z.object({
    body: z.object({
        name: z.string(),
    })
})

const schoolParamsSchema = z.object({
    params: z.object({
        id: z.string(),
    })
})

export type schoolParamsSchemaType = z.infer<typeof schoolParamsSchema>['params'];
