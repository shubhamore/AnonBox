"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputOTP,InputOTPGroup,InputOTPSlot} from "@/components/ui/input-otp"
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { verifySchema } from '@/schemas/verifySchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function VerifyPage() {
    const router=useRouter()
    const params=useParams<{username:string}>()
    const {toast}=useToast()

    const form=useForm<z.infer<typeof verifySchema>>({
        resolver:zodResolver(verifySchema),
    })

    const onSubmit=async (data:z.infer<typeof verifySchema>) => {
        try {
            const response=await axios.post('/api/verify-code',{
                username: params.username,
                code: data.code
            })
            toast({
                title:"Success",
                description: response.data.message
            })
            router.replace('/sign-in')
        } catch (error) {
            console.error("Error in signup ",error)
            const axiosError=error as AxiosError<ApiResponse>
            let errorMessage=axiosError.response?.data.message
            toast({
                title: "Sign-in failed",
                description: errorMessage,
                variant: "destructive"
            })
        }
    }

  return (
    <div className="container mx-auto px-4 py-10">
        <Card className="max-w-md mx-auto py-2 sm:py-4 sm:px-2 md:py-6 md:px-4 text-center">
            <CardHeader>
                <CardTitle>One-Time Password</CardTitle>
                <CardDescription>Please enter the one-time password sent to your Email.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        name="code"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='justify-center flex'>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className='w-2/5'>Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  )
}
