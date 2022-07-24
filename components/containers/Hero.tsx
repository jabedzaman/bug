import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className='flex min-h-screen lg:flex-row flex-col items-center justify-center  lg:mx-20 space-y-6 space-x-3'>
        <div>
            <img src="/assets/images/xense.jpg" alt="xense"  width='200' className='rounded-full space-y-2 border-spacing-4 border-gray-200 border-4'/>
        </div>
        <div className='flex lg:flex-col flex-col space-y-3 justify-center items-center '>
          <div className='space-x-2 font-semibold text-xl lg:text-4xl'>
          <span className='lg:ml-4'>
            Hey! I am
          </span>
          <span className='text-blue-500'>
           <Link href='/'>xense...</Link> 
          </span>
          </div>
          <div>
           18 y.o. student learning web dev and <br />
           excelling his coding skillss.... <br />
           I also write 
           <span className='underline mx-1'><Link href='/blogs'>Blogs</Link></span>
          </div>
        </div>
    </div>
  )
}

export default Hero