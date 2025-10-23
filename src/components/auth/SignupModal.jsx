"use client"

import React from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Signup from '@/components/auth/Signup'

const SignupModal = ({ isScrolled }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className={`
          px-5 py-1.5 
          rounded-full 
          border 
          hover:bg-transparent 
          ${isScrolled ? 'text-neutral-800 border-neutral-800' : 'text-neutral-50 border-neutral-50'}
        `}>
          SignUp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription>
            Join EMEGO<sup>3</sup> and start earning as a creator or viewer
          </DialogDescription>
        </DialogHeader>
        <Signup />
      </DialogContent>
    </Dialog>
  )
}

export default SignupModal