"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { messageSchema } from "@/schemas/messageSchema"
import { ApiResponse } from "@/types/ApiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card } from "@/components/ui/card"

export default function AnonPage() {
  const [loading,setLoading]=useState(false)
  const {toast}=useToast()
  const params=useParams<{username:string}>()

  const form=useForm<z.infer<typeof messageSchema>>({
    resolver:zodResolver(messageSchema),
    defaultValues:{
      content:""
    }
  })

  const onSubmit=async(data:z.infer<typeof messageSchema>)=>{
    setLoading(true)
    try {
      const response=await axios.post("/api/send-message",{
        username:params.username,
        content: data.content
      })
      toast({
        title:"Message sent successfully",
        description: response.data.message
      })
      form.reset()
    } catch (error) {
      console.error("Error in sending messages ",error)
      const axiosError=error as AxiosError<ApiResponse>
      let errorMessage=axiosError.response?.data.message
      toast({
          title:"sending message failed",
          description:errorMessage,
          variant:"destructive"
      })
    } finally{
      setLoading(false)
    }
  }


  return (
    <div className="container mx-auto my-5">
      <Card className="max-w-md mx-auto py-2 sm:py-4 sm:px-2 md:py-6 md:px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Write your message here:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {
                loading?<><Loader2 className="animate-spin mr-2"/>Submitting</>:"Submit"
              }
            </Button>
          </form>
        </Form>
    </Card>
    </div>
  )
}
