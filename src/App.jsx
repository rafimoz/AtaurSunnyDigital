import { useState } from 'react'
import './App.css'

import headerImg from './assets/header.png'

function App() {

  return (
    <main className='bg-primary'>
      {/*Hero section*/}
      <section className='h-screen flex items-center overflow-hidden relative'>
        <div className='absolute top-0 left-[50%] transform -translate-x-[50%] md:w-[35%] w-[60%] md:h-[80%] h-[40%] flex items-end justify-center rounded-b-full bg-secondary/20 '>
          <div className='overflow-hidden rounded-b-full'>
            <img className='w-full object-cover' src={headerImg} alt="" srcset="" />
          </div>
          <div className='absolute left-[50%] transform translate-x-[50%]'>
            <svg className='md:w-full w-30' viewBox="0 0 253 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M135.536 0H117.464V80.3314L87.4901 5.84939L70.7345 12.6458L101.485 89.0574L43.4402 30.7829L30.6618 43.6119L86.2954 99.4653L14.1985 67.841L6.96331 84.4663L83.2503 117.929H0V136.072H83.2502L6.96333 169.534L14.1985 186.159L86.2953 154.535L30.6618 210.388L43.4402 223.216L101.485 164.943L70.7345 241.355L87.4901 248.15L117.464 173.669V254H135.536V173.669L165.51 248.15L182.265 241.355L151.515 164.943L209.56 223.216L222.338 210.388L166.704 154.535L238.802 186.159L246.036 169.534L169.75 136.072H253V117.929H169.749L246.036 84.4663L238.802 67.841L166.704 99.4653L222.338 43.6118L209.56 30.7829L151.515 89.0572L182.265 12.6458L165.51 5.84939L135.536 80.3314V0Z" fill="#1F1F1F" />
            </svg>
          </div>
        </div>
        <div className='w-full md:mt-0 mt-50'>
          <div className='max-w-7xl relative mx-auto md:px-8 px-4 flex items-center md:justify-between justify-center md:text-start text-center'>
            <div className='z-10'>
              <h3 className='md:text-3xl text-xl'>Hey. I’m Sunny,</h3>
              <div className='md:text-6xl text-4xl'>
                <h1 className=''>A DIGITAL</h1>
                <h1>& Brand</h1>
                <h1>MARKETER</h1>
              </div>
              <p className='md:text-xl text-lg w-80 md:mt-4 mt-2'>Transforming ideas into stunning ADs and brand design that captivates, engages, and delivers results.</p>
              <div className='w-full flex md:justify-start justify-center'>
                <button className='flex mt-8 items-center gap-4 p-1 rounded-full bg-secondary text-primary'><span className='px-1 pl-2 font-semibold'>CONTACT ME</span>
                  <svg className='w-8' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="white" />
                    <path d="M10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19V18V17ZM26.7071 18.7071C27.0976 18.3166 27.0976 17.6834 26.7071 17.2929L20.3431 10.9289C19.9526 10.5384 19.3195 10.5384 18.9289 10.9289C18.5384 11.3195 18.5384 11.9526 18.9289 12.3431L24.5858 18L18.9289 23.6569C18.5384 24.0474 18.5384 24.6805 18.9289 25.0711C19.3195 25.4616 19.9526 25.4616 20.3431 25.0711L26.7071 18.7071ZM10 18V19H26V18V17H10V18Z" fill="#1F1F1F" />
                  </svg>
                </button>
              </div>
            </div>

            <div className='absolute top-0 md:right-8 right-4 z-10 md:block hidden'>
              <div>
                <a href='#services' className='flex items-center justify-end gap-4 text-end group cursor-pointer'>SERVICES <div className='w-10 h-[1px] bg-secondary group-hover:w-15 transition-all duration-300'></div></a>
                <a href='#portfolio' className='flex items-center justify-end gap-4 text-end group cursor-pointer'>PORTFOLIO <div className='w-10 h-[1px] bg-secondary group-hover:w-15 transition-all duration-300'></div></a>
                <a href='#about' className='flex items-center justify-end gap-4 text-end group cursor-pointer'>ABOUT ME <div className='w-10 h-[1px] bg-secondary group-hover:w-15 transition-all duration-300'></div></a>
              </div>
            </div>
          </div>
        </div>
        <svg className='text-secondary/5 fill-current absolute md:-bottom-[20%] -bottom-[10%] md:-right-[10%] -right-[30%] z-0 md:w-[500px] w-[400px]' viewBox="0 0 183 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.5579 16.3347C75.3365 -5.4449 106.825 -5.44489 119.603 16.3347L120.067 17.1257C125.963 27.1733 136.709 33.378 148.358 33.4596L149.276 33.466C174.527 33.6428 190.271 60.9123 177.798 82.8687L177.345 83.6661C171.591 93.7953 171.591 106.205 177.345 116.334L177.798 117.131C190.271 139.088 174.527 166.357 149.276 166.534L148.358 166.54C136.709 166.622 125.963 172.827 120.067 182.874L119.603 183.665C106.825 205.445 75.3365 205.445 62.5579 183.665L62.0938 182.874C56.1986 172.827 45.4517 166.622 33.8027 166.54L32.8856 166.534C7.63462 166.357 -8.10939 139.088 4.36292 117.131L4.81592 116.334C10.5698 106.205 10.5698 93.7953 4.81592 83.6661L4.36292 82.8687C-8.10939 60.9123 7.63462 33.6428 32.8856 33.466L33.8027 33.4596C45.4518 33.378 56.1986 27.1733 62.0938 17.1257L62.5579 16.3347Z" />
        </svg>
      </section>

      {/*Hero section*/}
      <section id='about' className='h-screen flex items-center overflow-hidden'>
        <div className='max-w-7xl mx-auto md:px-8 px-4 flex flex-col items-center justify-center'>
          <h1 className='md:text-4xl text-2xl'>About</h1>
          <p className='md:text-xl text-md text-center'>Figma ipsum component variant main layer. Shadow invite project style subtract. Selection plugin arrange font strikethrough team align component stroke. Object invite star invite plugin object asset style font. Arrow distribute asset image subtract effect align inspect follower horizontal. Pencil reesizing draft vertical variant selection invite horizontal. Distribute font comment clip component arrow. Link shadow edit effect content slice line subtract export group. Draft device auto rotate content frame asset.</p>
        </div>
      </section>
    </main>
  )
}

export default App