import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-around bg-transparent relative z-50 p-4'>
      {/* header logo or icon or text */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-center text-neutral-50'>EMEGO <span><sup className='text-sm text-neutral-50'>TV</sup></span></h1>
      </div>

      {/* signup button */}
      <div className='text-center'>
        <Button className='px-7 py-2 rounded-full border bg-transparent'>SignUp</Button>
      </div>
    </header>
  )
}

export default Header


