import React, { useState } from 'react'
import {motion} from 'motion/react'
import LoginModal from '../components/Login.Modal'

function Home() {

  const highlights = [
    "AI-Powered Website Creation",
    "Fully Responsive Designs",
    "Production Ready Output"
  ]

  {/*When to show login modal*/}
  const [openLogin , setOpenLogin] = useState(false);

  return (
    <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
      <motion.div
      initial={{y:-40, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          {/*left div in header */}
          <div className='text-lg font-semibold'>
            {/* Logo or site name can go here */}
              WEB.Build
          </div>
          {/*right div in header */}
          <div className='flex items-center gap-5'>
            {/* Navigation links can go here */}
              <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer'>PRICING</div>
              <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'
              onClick={()=>setOpenLogin(true)}
              >
                Get Started
              </button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className='pt-44 pb-32 px-6 text-center'>
        <motion.h1
        initial={{y: 40, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
        className='text-5xl md:text-7xl font-bold tracking-tight'>
          STUNNING WEBSITE AT FINGERTIP <br></br>
          <span className='bg-linear-to-r from-purple-400 to-blue-700 bg-clip-text text-transparent'>with AI</span>
        </motion.h1>

        <motion.p
        initial={{y: 40, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1, delay: 0.2}}
        className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'
        >
          Take some time to describe your idea.AI will build the website for you.
        </motion.p>

        <button className='px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition mt-12'>Get Started</button>
      </section>

      {/*Card section */}
      <section className='max-w-7xl mx-auto px-6 pb-32'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {highlights.map((highlight, index) => (
            <motion.div
            key={index}
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            className='bg-white/5 border border-white/10 rounded-2xl p-8'
            >
              <h3 className='text-xl font-semibold mb-3'>{highlight}</h3>
              <p className='text-sm text-zinc-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eligendi
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/*footer section */}
      <footer className='border-t border-white/10 py-10 text-center text-sm text-zinc-500'>
        &copy; {new Date().getFullYear()} WEB.Build. All rights reserved.
      </footer>

      {/*Login Modal */}
      {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}


    </div>
  )
}

export default Home