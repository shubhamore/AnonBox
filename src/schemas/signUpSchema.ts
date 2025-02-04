import {z} from "zod"

export const usernameValidation=z
    .string()
    .min(3,"Username must be atleast 3 characters")
    .max(20,"Username should not exceed 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username should not contain special characters")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid Email address"}),
    password:z.string().min(6,{message:"Password must be atleast 6 characters"})
})