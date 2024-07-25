import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full text-center bg-secondary py-5'>
      <p>&#169; 2024 <Link href={"/"}>AnonBox</Link>. All rights reserved. Made by <Link href={"https://github.com/shubhamore"} className='underline'>Shubham More</Link> </p>
    </div>
  )
}
