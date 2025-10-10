'use client'
import SignupModal from '@/components/auth/SignupModal';
import React from 'react'

const Header = () => {

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

      {/* signup button */}
      <div className=''>
          <SignupModal isScrolled={isScrolled}/>
      </div>
    </header>
  )
}

export default Header


