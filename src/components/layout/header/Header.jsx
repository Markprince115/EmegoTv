"use client"
import React, { useState, useEffect } from 'react'
import SignupModal from '@/components/auth/SignupModal'
import { useAuth } from '../../../../context/AuthCotext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // if user is signed in, show profile pic and dropdown menu
  // if not, show signup button
  // import use auth from auth context
  const { user } = useAuth()



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='flex items-center justify-around bg-transparent fixed w-full backdrop-blur-md z-50 p-4'>
      {/* header logo or icon or text */}
      <div className='text-center'>
        <h1 className={`text-3xl font-bold text-center ${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}>
          EMEGO<span><sup className={`text-sm ${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}>3</sup></span>
        </h1>
      </div>

      {/* signup button */}
      {!user && <div className='text-center'>
        <SignupModal isScrolled={isScrolled} />
      </div>}
    </header>
  )
}

export default Header


