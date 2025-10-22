'use client'
import SignupModal from '@/components/auth/SignupModal';
import { UserProfile } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import useAuthStore from 'store/AuthStore';

const Header = () => {
  // check if user is logged in from auth store
  const {user, logout} = useAuthStore()

  // change signup button color on scroll to dark background
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='flex items-center justify-around bg-transparent fixed w-full backdrop-blur-md z-50 p-4'>
      {/* header logo or icon or text */}
      <div className='text-center'>
        <h1 className={`text-3xl font-bold text-center ${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}>
          EMEGO<span><sup className={`text-sm ${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}>3</sup></span>
        </h1>
      </div>

      {/* if user is signed up display profile button */}
      {user ?
      (<Link href='/profile'>
          <UserProfile/>
        </Link>
      )
        :
        (<div className=''>
          <SignupModal isScrolled={isScrolled}/>
          </div>
        )}
    </header>
  )
}

export default Header


