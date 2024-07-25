import { Loader2 } from 'lucide-react'
import React from 'react'

export default function loading() {
  return (
    <div className='min-h-screen flex justify-center items-center text-center'>
      <Loader2 className='animate-spin h-16 w-16'/>
    </div>
  )
}
