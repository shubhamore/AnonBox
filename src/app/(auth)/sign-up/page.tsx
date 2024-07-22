"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { useDebounceCallback } from 'usehooks-ts'
import React,{useState,useEffect} from 'react'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { signUpSchema } from "@/schemas/signUpSchema"
import axios,{AxiosError} from "axios"
import { ApiResponse } from "@/types/ApiResponse"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function page() {
    const [username,setUsername]=useState('')
    const [usernameMessage,setUsernameMessage]=useState('')
    const [isCheckingUsername,setIsCheckingUsername]=useState(false)
    const [isSubmitting,setIsSubmitting]=useState(false)
    const debounced=useDebounceCallback(setUsername,500)
    const { toast } = useToast()
    const router=useRouter()

    const form=useForm<z.infer<typeof signUpSchema>>({
        resolver:zodResolver(signUpSchema),
        defaultValues:{
            username:'',
            email:'',
            password:''
        }
    })

    useEffect(()=>{
        const checkUsernameUnique=async () => {
            if(username){
                setIsCheckingUsername(true)
                setUsernameMessage('')
                try {
                    const response=await axios.get(`/api/check-username-unique/?username=${username}`)
                    setUsernameMessage(response.data.message)
                } catch (error) {
                    const axiosError=error as AxiosError<ApiResponse>
                    setUsernameMessage(
                        axiosError.response?.data.message ?? "Error checking username"
                    )
                } finally{
                    setIsCheckingUsername(false)
                }
            }
        }
        checkUsernameUnique()
    },[username])

    const onSubmit=async(data:z.infer<typeof signUpSchema>)=>{
        setIsSubmitting(true)
        try {
            const response=await axios.post<ApiResponse>(`/api/sign-up`,data)
            toast({
                title:"Success",
                description: response.data.message
            })
            router.replace(`/verify/${username}`)

        } catch (error) {
            console.error("Error in signup ",error)
            const axiosError=error as AxiosError<ApiResponse>
            let errorMessage=axiosError.response?.data.message
            toast({
                title:"Sign-up failed",
                description:errorMessage,
                variant:"destructive"
            })
        } finally{
            setIsSubmitting(false)
        }
    }

  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    name="username"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="username" 
                                {...field} 
                                onChange={(e)=>{
                                    field.onChange(e)
                                    debounced(e.target.value)
                                }}
                            />
                        </FormControl>
                        {isCheckingUsername&&<Loader2 className="animate-spin"/>}
                        <p>{usernameMessage}</p>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting?
                    (
                        <>
                            <Loader2 className="animate-spin"/> Please wait
                        </>
                    )
                    :('Signup')}
                </Button>
            </form>
        </Form>
        <div>
            <Link href="/sign-in">Sign in</Link>
        </div>
    </div>
  )
}
