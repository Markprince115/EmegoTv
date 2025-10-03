"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Signup from './Signup'

const SignupModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='px-7 py-2 rounded-full border bg-transparent'>
          SignUp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join EMEGO TV</DialogTitle>
          <DialogDescription>
            Create your account to start earning as a creator or viewer
          </DialogDescription>
        </DialogHeader>
        <Signup />
      </DialogContent>
    </Dialog>
  )
}

export default SignupModal
