import React from 'react'

const StatCard = ({ label, value, sublabel }) => {
  return (
    <div className="rounded-2xl border bg-white/70 backdrop-blur-sm p-6 shadow-sm">
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
    </div>
  )
}

const Testimonial = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-transparent to-neutral-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">Trusted by our community</h2>
          <p className="mt-2 text-neutral-500">Growing numbers of creators and viewers benefit from EMEGO TV</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StatCard
            label="Total registered users"
            value="128,542+"
            sublabel="Creators and viewers combined"
          />
          <StatCard
            label="Paid out to creators"
            value="$2.4M+"
            sublabel="Total creator earnings"
          />
          <StatCard
            label="Paid out to viewers"
            value="$860K+"
            sublabel="Rewards shared with viewers"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial