import React from 'react'
import Feature from './Feature'

interface featureSchema {
  title: string,
  description: string
}

export default function Features() {
  return (
    <div className='container mt-16 mb-40 px-5'>
        <div>
          <h1 className='text-bold tracking-widest text-5xl text-center mb-9'>Features</h1>
        </div>
        <div className='flex gap-3 justify-center flex-wrap'>
          <Feature title="Anonymous Messaging" description='Receive messages from anyone without revealing your identity.'/>
          <Feature title="Easy Sharing" description='Share your unique link via social media, email, or any platform.'/>
          <Feature title="User Privacy" description='Your personal information remains secure and private.'/>
        </div>
    </div>
  )
}
