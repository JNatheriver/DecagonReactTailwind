import React, { FC, Suspense } from 'react'
import Icosaedro from '../icosaedro'

const HeaderBox: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className='bg-[#131313] flex flex-1 flex-col w-screen lg:h-screen' {...props}>
      <Header className='inline-flex flex-1 justify-between py-[0.8rem] px-4 border-b border-b-white/40' />
      <div className='flex max-lg:flex-col  lg:h-5/6 lg:items-center lg:justify-center lg:flex-row-reverse lg:w-screen '>
        <Overlay className='flex justify-center h-[501px] lg:w-2/3 overflow-clip max-lg:border-b-white/40 max-lg:border-b lg:flex-1' />
        <InfoArticle className='flex flex-col lg:w-1/3' />
      </div>
      <FooterBrand />
    </div>
  )
}

const Header: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <div className='inline-flex items-center space-x-6 '>
        <img loading='lazy' className='w-10 h-8' src='https://decagon.ai/landing/logo-filled.svg' />
        <img loading='lazy' className='w-24 h-3' src='https://decagon.ai/landing/logo-text.svg' />
      </div>
      <div className='backdrop-blur-sm bg-gray-300/10 hover:bg-white/15 rounded-full font-sans text-sm text-white py-2 px-4 border border-white/30'>Book demo</div>
    </div>
  )
}

const Overlay: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      {/* Corners */}
      <div className='flex flex-1 flex-col content-between absolute max-lg:w-full lg:w-2/3 h-[501px]'>
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

      <div className='absolute bg-[length:20px_20px] w-full opacity-30 h-[501px] lg:w-2/3' style={{ backgroundImage: 'radial-gradient(circle 2px at 10px 10px,hsla(0,0%,100%,.1) 2px,transparent 2.5px),radial-gradient(circle 2px at 10px 10px,hsla(0,0%,100%,.1) 2px,transparent 2.5px)' }} />

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
    <article {...props}>
      <h2 className='font-mono text-4xl px-5 py-9 text-white'>AI support agents for your enterprise</h2>
      <p className='p-5 pr-10 font-mono text-lg text-white/90'>Don't get stuck in the last generation. Delight customers 10x more while reducing costs with true generative AI. Trusted by massive enterprises and high-growth startups.</p>
      <div className='flex w-full max-lg:min-w-[500px] overflow-clip '>
        <div className='flex w-[500px]'>
          <input className='bg-gray-300/10 rounded-full font-mono text-xl text-white m-8 mb-7 py-[1.12rem] px-7 border border-white/30 flex-1' type='email' placeholder='Enter email for demo' />
          <button className='relative rounded-full bg-blue-600 z-10 w-12 h-12 self-center right-24 flex items-center justify-center'>
            <span role='img' aria-label='arrow-right' className='anticon anticon-arrow-right text-white text-2xl'><svg viewBox='64 64 896 896' focusable='false' data-icon='arrow-right' width='1em' height='1em' fill='currentColor' aria-hidden='true'><path d='M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z' /></svg></span>
          </button>
        </div>
      </div>

    </article>
  )
}

const FooterBrand: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className='border-t-white/40 border-t inline-flex flex-1 justify-start overflow-clip [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]' {...props}>
      <BrandList />
      <BrandList />
    </div>
  )
}

const imageData = [
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Feventbrite.png&w=3840&q=75', alt: 'eventbrite', width: 'w-32' },
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Fbilt.png&w=3840&q=75', alt: 'bilt', width: 'w-24' },
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Fraise.png&w=3840&q=75', alt: 'Raise', width: 'w-24' },
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Fvanta.png&w=3840&q=75', alt: 'Vanta', width: 'w-24' },
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Fsaturn.png&w=3840&q=75', alt: 'saturn', width: 'w-40' },
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Fsubstack.png&w=3840&q=75', alt: 'substack', width: 'w-40' },
  { src: 'https://decagon.ai/_next/image?url=%2Flanding%2Fmotion.png&w=3840&q=75', alt: 'motion', width: 'w-40' }
]

const CarouselItem = ({ src, alt, width }: {src: string, alt: string, width: string}) => {
  return (
    <li className={width}>
      <img src={src} alt={alt} />
    </li>
  )
}

const BrandList: FC<React.HtmlHTMLAttributes<HTMLUListElement>> = (props) => {
  return (
    <ul className='flex items-center animate-infinite-scroll justify-center h-[72px] *:m-8' {...props}>
      {imageData.map((image, index) => (
        <CarouselItem key={index} src={image.src} alt={image.alt} width={image.width} />
      ))}
    </ul>
  )
}

export default HeaderBox
