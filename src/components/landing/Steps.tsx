import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import Step from './Step'

export default function Steps() {
  return (
    <div className='container my-16 px-5'>
        <div>
          <h1 className='text-bold tracking-widest text-5xl text-center mb-9'>Steps</h1>
        </div>
        <Step stepno="01" title='Sign Up' desc="Create your AnonBox account in seconds." />
        <Step stepno="02" title='Share Your Link' desc="Get your unique link and share it with others." />
        <Step stepno="03" title='Receive Messages' desc="Receive anonymous messages directly in your AnonBox." />

    </div>
  )
}
