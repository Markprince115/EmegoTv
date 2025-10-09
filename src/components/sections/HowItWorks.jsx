import React from 'react'
import { Button } from '@/components/ui/button'
import { UserPlus, ClipboardCheck, UserCircle2, Send } from 'lucide-react'

const HowItWorks = () => {
  return (
    <section className='w-full py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold text-center mb-8'>How to Get Started</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Step 1 */}
          <div className='flex flex-col items-center text-center p-4 space-y-3'>
            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center'>
              <UserPlus className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='font-semibold'>Step 1</h3>
            <p className='text-sm text-neutral-600'>Click on the Sign Up button</p>
            <Button variant="outline" className='rounded-full'>
              Sign Up
            </Button>
          </div>

          {/* Step 2 */}
          <div className='flex flex-col items-center text-center p-4 space-y-3'>
            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center'>
              <ClipboardCheck className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='font-semibold'>Step 2</h3>
            <p className='text-sm text-neutral-600'>Fill in your details</p>
          </div>

          {/* Step 3 */}
          <div className='flex flex-col items-center text-center p-4 space-y-3'>
            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center'>
              <UserCircle2 className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='font-semibold'>Step 3</h3>
            <p className='text-sm text-neutral-600'>Select your role</p>
            <div className='flex gap-2 text-xs'>
              <span className='px-3 py-1 bg-gray-100 rounded-full'>Viewer</span>
              <span className='px-3 py-1 bg-gray-100 rounded-full'>Creator</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className='flex flex-col items-center text-center p-4 space-y-3'>
            <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center'>
              <Send className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='font-semibold'>Step 4</h3>
            <p className='text-sm text-neutral-600'>Create your account</p>
            <Button className='rounded-full bg-purple-600'>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
