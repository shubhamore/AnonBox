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
import { ApiResponse } from "@/types/ApiResponse"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signInSchema } from "@/schemas/singInSchema"
import { signIn } from "next-auth/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function page() {
    const { toast } = useToast()
    const router=useRouter()

    const form=useForm<z.infer<typeof signInSchema>>({
        resolver:zodResolver(signInSchema),
        defaultValues:{
            identifier:'',
            password:''
        }
    })

    const onSubmit=async(data:z.infer<typeof signInSchema>)=>{
      const response=await signIn('credentials',{
        redirect: false,
        identifier: data.identifier,
        password: data.password
      })
      if(response?.error){
        toast({
          title: "Login Failed",
          description: "Incorrect Email or Password",
          variant: "destructive"
        })
      }
      if(response?.url){
        router.replace('/dashboard')
      }
    }

  return (
    <div className="container mx-auto px-4 py-10">
      <Card className="max-w-md mx-auto py-2 sm:py-4 sm:px-2 md:py-6 md:px-4">
  <CardHeader className="text-center">
    <CardTitle>Sign-in</CardTitle>
  </CardHeader>
  <CardContent>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    name="identifier"
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

                <Button type="submit" className="w-full">Sign in</Button>
            </form>
        </Form>
  </CardContent>
  <CardFooter>
          <p>Don't have an account?
          <Link href="/sign-up" className="text-blue-700 pl-1 ">Sign-up</Link>
          </p> 
        </CardFooter>
</Card>
    </div>
  )
}
