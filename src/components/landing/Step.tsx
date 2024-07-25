import React from 'react'

export default function Step({stepno,title,desc}:{stepno:string,title:string,desc:string}) {
  return (
    <div className='border-solid border-border border p-10 flex flex-col sm:flex-row gap-8 justify-between items-stretch'>
          {/* <div>
            <Image src={"/bg-gradient.svg"} alt='bg' width={250} height={250} />
          </div> */}
          <div className='flex items-center justify-center'>
            <span className='text-7xl sm:text-9xl'>{stepno}</span>
          </div>
          <div className='text-center flex flex-col justify-evenly'>
            <h1 className='text-bold text-5xl mb-3'>{title}</h1>
            <p className='text-lg'>{desc}</p>
          </div>
        </div>
  )
}
