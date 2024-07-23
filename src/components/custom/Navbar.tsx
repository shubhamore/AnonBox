"use client"

import React from 'react'
import Link from 'next/link'
import { useSession,signOut } from 'next-auth/react'
import { User } from 'next-auth'
import { Button } from '../ui/button'


export default function Navbar() {
    const {data:session}=useSession()
    const user:User=session?.user as User

  return (
    <nav>
        <div>
            {
                session?(<Button onClick={()=>signOut()}>Logout</Button>):(<Link href={"/sign-in"}>Login</Link>)
            }
        </div>
    </nav>
  )
}
