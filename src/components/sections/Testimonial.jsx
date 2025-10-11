'use client'
import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ label, value, sublabel, delay }) => {
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
      className="rounded-2xl border bg-white/70 backdrop-blur-sm p-6 shadow-sm"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-neutral-800 tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm text-neutral-800">
        {label}
      </div>
      {sublabel ? (
        <div className="mt-2 text-xs text-neutral-800">
          {sublabel}
        </div>
      ) : null}
    </motion.div>
  )
}

const Testimonial = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-transparent to-neutral-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
            Trusted by our community
          </h2>
          <p className="mt-2 text-neutral-500">
            Growing numbers of creators and viewers benefit from EMEGO TV
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StatCard
            label="Total registered users"
            value="128,542+"
            sublabel="Creators and viewers combined"
            delay={0.2}
          />
          <StatCard
            label="Paid out to creators"
            value="$2.4M+"
            sublabel="Total creator earnings"
            delay={0.4}
          />
          <StatCard
            label="Paid out to viewers"
            value="$860K+"
            sublabel="Rewards shared with viewers"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial