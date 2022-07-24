import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <hr />
      <div className='flex flex-col justify-center items-center my-10'>
        <div className='space-x-2'>
          <span>
           ©️ Copyright by  
           </span>
           <span>
            <Link href='/'>xense</Link>
           </span>
        </div>
        <div>
          {/* socials */}
        </div>
      </div>
    </div>
  )
}

export default Footer