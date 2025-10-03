import React from 'react'
import SignupModal from '@/components/auth/SignupModal'

const Header = () => {
  return (
    <header className='flex items-center justify-around bg-transparent relative z-50 p-4'>
      {/* header logo or icon or text */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-center text-neutral-50'>EMEGO <span><sup className='text-sm text-neutral-50'>TV</sup></span></h1>
      </div>

      {/* signup button */}
      <div className='text-center'>
        <SignupModal />
      </div>
    </header>
  )
}

export default Header


