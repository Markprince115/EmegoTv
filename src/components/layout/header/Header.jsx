'use client'
import SignupModal from '@/components/auth/SignupModal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';
import useAuthStore from 'store/AuthStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings } from 'lucide-react';

const Header = () => {
  // check if user is logged in from auth store
  const {user, logout, isAuthenticated} = useAuthStore()
  const router = useRouter();

  const handleLogout = ()=>{
    logout();
    toast.success('Logged out Successfully')
    router.push('/')
  }

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
        <Link href='/'>
        <h1 className={`text-3xl font-bold text-center ${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}>
          EMEGO<span><sup className={`text-sm ${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}>3</sup></span>
        </h1>
        </Link>
      </div>

      {/* Updated profile section */}
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative">
              <User className="h-5 w-5 mr-2" />
              {user.username}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuItem asChild>
              <Link href="/profile" className="w-full flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-600 focus:text-red-600 cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className=''>
          <SignupModal isScrolled={isScrolled}/>
        </div>
      )}
    </header>
  )
}

export default Header


