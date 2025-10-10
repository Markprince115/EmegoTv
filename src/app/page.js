'use client'

import Hero from "@/components/sections/Hero"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonial from "@/components/sections/Testimonial"
import { useAuth } from "../../context/AuthContext"
import { toast } from "sonner"

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonial />
      <HowItWorks />
    </main>
  )
}


