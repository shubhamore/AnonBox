import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Cta() {
  return (
    <div className='container mx-auto text-center flex justify-center items-center my-32'>
      <Card className='max-w-screen-md bg-secondary'>
        <CardHeader>
          <CardTitle>
          <p>Ready to start receiving anonymous messages?</p>  
          <p>Sign up today and join the AnonBox community.</p>
          </CardTitle>
        </CardHeader>
          <CardContent>
            <Button variant={"outline"}><Link href={"/sign-up"}>Sign-up</Link></Button>
          </CardContent>
      </Card>
    </div>
  )
}
