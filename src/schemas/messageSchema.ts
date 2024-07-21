import {z} from "zod"

export const messageSchema=z.object({
    content:z.string()
        .min(10,{message:"content should contain atleast 10 characters"})
        .max(300,{message:"content should not exceed 300 characters"})
})