"use client"

import React from 'react'
import Link from 'next/link'
import { useSession,signOut } from 'next-auth/react'
import { User } from 'next-auth'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme/theme-toggle'

export default function Navbar() {
    const {data:session}=useSession()
    const user:User=session?.user as User

  return (
    <nav className='border-b border-accent flex justify-between px-5 py-3'>
        {/* <div>
            {
                session?(<Button onClick={()=>signOut()}>Logout</Button>):(<Link href={"/sign-in"}>Login</Link>)
            }
        </div> */}
        <div className='flex justify-between items-center text-3xl font-semibold'><Link href={"/"}>AnonBox</Link></div>
        <ThemeToggle/>
    </nav>
  )
}
