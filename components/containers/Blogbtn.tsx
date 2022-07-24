import React from 'react'
import Link from 'next/link'

function Blogbtn() {
  return (
    <div className='flex justify-center p-10 lg:p-20 flex-col items-center'>
        <div className='text-white animate-pulse hover:animate-none font-serif text-lg lg:text-2xl'>
            <Link href='/blogs' className=''> Click here to read my blogs </Link>
        </div>
    </div>
  )
}

export default Blogbtn