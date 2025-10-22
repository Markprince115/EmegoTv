import Hero from "@/components/sections/Hero"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonial from "@/components/sections/Testimonial"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonial />
      <HowItWorks />
    </main>
  )
}


