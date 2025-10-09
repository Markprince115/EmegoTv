<section className="relative min-h-screen w-full overflow-hidden">
        {/* Radial Gradient Background from Bottom */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
            background: "radial-gradient(115% 115% at 50% 100%, #fff 40%, #7c3aed 100%)",
            }}
        />
        
        {/* Geometric Grid Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                 `,
                 backgroundSize: '40px 40px'
               }}></div>
        </div>
        
        {/* Diagonal Grid Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(45deg, rgba(255,255,255,0.2) 1px, transparent 1px),
                   linear-gradient(-45deg, rgba(255,255,255,0.2) 1px, transparent 1px)
                 `,
                 backgroundSize: '60px 60px'
               }}></div>
        </div>
        
        {/* Floating Social App SVG Icons */}
        {/* Video Camera Icon */}
        <div className='absolute top-1/4 left-10 md:left-20 animate-float z-30'>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className='text-white/40 drop-shadow-lg'>
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Play Button Icon */}
        <div className='absolute top-1/3 right-16 md:right-24 animate-float-delayed z-30'>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className='text-white/35 drop-shadow-lg'>
                <polygon points="5,3 19,12 5,21" fill="currentColor"/>
            </svg>
        </div>

        {/* Users/Viewers Icon */}
        <div className='absolute bottom-1/3 left-16 md:left-24 animate-float-slow z-30'>
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className='text-white/45 drop-shadow-lg'>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Creator/Edit Icon */}
        <div className='absolute top-1/2 right-8 md:right-16 animate-float z-30'>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className='text-white/40 drop-shadow-lg'>
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Microphone Icon */}
        <div className='absolute bottom-1/4 right-12 md:right-20 animate-float-delayed z-30'>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className='text-white/35 drop-shadow-lg'>
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Heart/Like Icon */}
        <div className='absolute top-2/3 left-8 md:left-12 animate-float-slow z-30'>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className='text-white/30 drop-shadow-lg'>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Share Icon */}
        <div className='absolute top-1/6 right-1/4 animate-float z-30'>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className='text-white/35 drop-shadow-lg'>
                <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2"/>
            </svg>
        </div>

        {/* Comment Icon */}
        <div className='absolute bottom-1/6 left-1/4 animate-float-delayed z-30'>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className='text-white/40 drop-shadow-lg'>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Follow/Plus Icon */}
        <div className='absolute top-1/2 left-1/6 animate-float-slow z-30'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-white/30 drop-shadow-lg'>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
            </svg>
        </div>

        {/* Notification Bell Icon */}
        <div className='absolute bottom-1/2 right-1/6 animate-float z-30'>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className='text-white/35 drop-shadow-lg'>
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Star/Rating Icon */}
        <div className='absolute top-3/4 right-1/3 animate-float-delayed z-30'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className='text-white/25 drop-shadow-lg'>
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Message/Chat Icon */}
        <div className='absolute top-1/5 left-1/3 animate-float-slow z-30'>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className='text-white/30 drop-shadow-lg'>
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Your Content/Components */}
        <div className='absolute inset-0 flex items-center justify-center px-4'>
            <div className='text-center max-w-4xl mx-auto space-y-3'>
                {/* profiles icons of subscribers */}
                <div className='flex justify-center items-center mb-4'>
                    {/* Overlapping Avatar Stack */}
                    <div className='flex items-center -space-x-3'>
                        {/* Profile Avatar 1 */}
                        <div className='relative z-10'>
                            <div className='w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white shadow-lg'></div>
                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                        </div>
                        
                        {/* Profile Avatar 2 */}
                        <div className='relative z-20'>
                            <div className='w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white shadow-lg'></div>
                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                        </div>
                        
                        {/* Profile Avatar 3 */}
                        <div className='relative z-30'>
                            <div className='w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white shadow-lg'></div>
                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                        </div>
                        
                        {/* Profile Avatar 4 */}
                        <div className='relative z-30'>
                            <div className='w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white shadow-lg'></div>
                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                        </div>
                        
                        {/* Profile Avatar 5 */}
                        <div className='relative z-50'>
                            <div className='w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 border-2 border-white shadow-lg'></div>
                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
                        </div>
                    </div>
                    
                    {/* Plus Icon for More */}
                    <div className='flex items-center justify-center w-7 h-7 rounded-full bg-white/20 border-2 border-white/30 shadow-lg ml-2'>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className='text-white'>
                            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    
                    {/* Subscriber Count */}
                    <div className='ml-2'>
                        <span className='text-sm text-white/80 font-medium'>+2.5K subscribers</span>
                    </div>
                </div>
                {/* heading and description with a cta */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-b from-neutral-800 to-neutral-300 bg-clip-text text-transparent'>
                    Get Paid to Watch <br className='hidden sm:block'/>
                    <span className='sm:hidden'> </span>and Create
                </h1>
                <p className='text-[18px] text-neutral-500 max-w-2xl'>
                    Join the waitlist to earn as a viewer or creator, <br/>secure your slot today!.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Button className='px-8 py-5 bg-white text-purple-600 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                        Join Waitlist
                    </Button>
                    <Button className='px-8 py-5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300'>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    </section>