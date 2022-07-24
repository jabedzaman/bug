import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between lg:py-8 py-4 text-white'>
        <div>
            img
        </div>
        <div className='space-x-2'>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Projects</Link>
            <Link href='/blogs'>Blogs</Link>
            <Link href='/'>Contact</Link>
        </div>
    </div>
  )
}

export default Header