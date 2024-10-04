import { z } from "zod"

export const formSchema = z.object({
    engineType: z.string().min(2).max(50),
    model: z.string().min(2).max(50),
    color: z.string().min(2).max(50),
    photo: z.string().min(2).max(100),
    priceDay: z.string().min(2).max(50),
    isPublish: z.boolean(),
  })