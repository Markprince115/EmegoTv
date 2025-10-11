'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserPlus, ClipboardCheck, UserCircle2, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const StepCard = ({ icon: Icon, step, description, children, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      className='flex flex-col items-center text-center p-4 space-y-3'
    >
      <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center'>
        <Icon className='w-6 h-6 text-purple-600' />
      </div>
      <h3 className='font-semibold'>Step {step}</h3>
      <p className='text-sm text-neutral-600'>{description}</p>
      {children}
    </motion.div>
  )
}

const HowItWorks = () => {
  return (
    <section className='w-full py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-2xl font-bold text-center mb-8'
        >
          How to Get Started
        </motion.h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <StepCard 
            icon={UserPlus} 
            step={1} 
            description="Click on the Sign Up button"
            delay={0.2}
          >
            <Button variant="outline" className='rounded-full'>
              Sign Up
            </Button>
          </StepCard>

          <StepCard 
            icon={ClipboardCheck} 
            step={2} 
            description="Fill in your details"
            delay={0.4}
          />

          <StepCard 
            icon={UserCircle2} 
            step={3} 
            description="Select your role"
            delay={0.6}
          >
            <div className='flex gap-2 text-xs'>
              <span className='px-3 py-1 bg-gray-100 rounded-full'>Viewer</span>
              <span className='px-3 py-1 bg-gray-100 rounded-full'>Creator</span>
            </div>
          </StepCard>

          <StepCard 
            icon={Send} 
            step={4} 
            description="Create your account"
            delay={0.8}
          >
            <Button className='rounded-full bg-purple-600'>
              Submit
            </Button>
          </StepCard>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
