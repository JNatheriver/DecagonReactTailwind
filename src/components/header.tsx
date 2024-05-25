import React, { FC, Suspense } from 'react'
import Icosaedro from '../icosaedro'

const HeaderBox: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className='bg-[#131313] flex flex-1 flex-col' {...props}>
      <Header />
      <Overlay />
      <InfoArticle />
    </div>
  )
}

const Header: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className='flex flex-1 justify-between py-[0.8rem] px-4 border-b border-b-white/40' {...props}>
      <div className='flex items-center space-x-6'>
        <img loading='lazy' className='w-10 h-8' src='https://decagon.ai/landing/logo-filled.svg' />
        <img loading='lazy' className='w-24 h-3' src='https://decagon.ai/landing/logo-text.svg' />
      </div>
      <div className='backdrop-blur-sm bg-gray-300/10 hover:bg-white/15 rounded-full font-sans text-sm text-white py-2 px-4 border border-white/30'>Book demo</div>
    </div>
  )
}

const Overlay: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className='flex border-b-white border-b justify-center h-[501px] overflow-clip' style={{ clipPath: 'content-box' }} {...props}>
      {/* Corners */}
      <div className='flex flex-1 flex-col content-between absolute w-full h-[501px]'>
        {/* Corner Top */}
        <div className='flex flex-1 justify-between h-1/2 w-full'>
          <div className='w-3 h-3 border-t-2 border-l-2 m-6 border-[#777777]' />
          <div className='w-3 h-3 border-t-2 border-r-2 m-6 border-[#777777]' />
        </div>
        {/* Corner bottom */}
        <div className='flex flex-1 justify-between items-end h-1/2 w-full'>
          <div className='w-3 h-3 border-b-2 border-l-2 m-6 border-[#777777]' />
          <div className='w-3 h-3 border-b-2 border-r-2 m-6 border-[#777777]' />
        </div>
      </div>

      <div style={{ position: 'absolute', backgroundImage: 'radial-gradient(circle 2px at 10px 10px,hsla(0,0%,100%,.1) 2px,transparent 2.5px),radial-gradient(circle 2px at 10px 10px,hsla(0,0%,100%,.1) 2px,transparent 2.5px)', backgroundSize: '20px 20px', width: '100%', height: '100%', opacity: '30%' }} />

      <div className='self-center h-[300px]'>
        <Suspense>
          <Icosaedro className='max-h-[300px]' />
        </Suspense>
      </div>

    </div>
  )
}

const InfoArticle: FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <article className='text-white' {...props}>
      <h2 className='font-mono text-4xl px-5 py-9'>AI support agents for your enterprise</h2>
      <p>Don't get stuck in the last generation. Delight customers 10x more while reducing costs with true generative AI. Trusted by massive enterprises and high-growth startups.</p>
      <input className='backdrop-blur-sm bg-gray-300/10 rounded-full font-sans text-sm text-white py-2 px-4 border border-white/30' type='email' placeholder='Enter email for demo' />
    </article>
  )
}

export default HeaderBox
