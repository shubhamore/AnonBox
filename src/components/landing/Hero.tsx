import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='container mx-auto text-center py-10 mb-40'>
        {/* <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-blue-500"></div> */}
        {/* <div className="absolute inset-0 bg-[url('/bg-gradient.svg')] bg-no-repeat bg-center bg-cover opacity-5"></div> */}
        <div className='my-16'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-3'>Connect Anonymously</h1> 
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter md:tracking-widest'>Speak Freely</h1> 
        </div>
        <div className='text-center flex justify-center items-center mb-9'>
          <p className='text-sm sm:text-xl md:text-2xl tracking-tight max-w-2xl text-primary'>AnonBox lets you receive anonymous messages from anyone. Share your unique link and start receiving messages without revealing your identity</p>
        </div>
        <Button><Link href={"/sign-up"}>Get Started</Link></Button>
    </div>
  )
}
