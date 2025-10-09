"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Signup from './Signup'

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
      <DialogContent className="sm:max-w-[375px]">
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription className="text-sm">
            Create your account to get started
          </DialogDescription>
        </DialogHeader>
        <Signup />
      </DialogContent>
    </Dialog>
  )
}

export default SignupModal
