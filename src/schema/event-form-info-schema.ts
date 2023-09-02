import * as z from 'zod'

export const eventFormInfoSchema = z.object({
  name: z.string().min(5, { message: 'Event name is required' })
})
