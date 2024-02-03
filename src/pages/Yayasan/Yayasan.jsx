import React from 'react';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';

import CoverImages from '../../assets/images/cover-1.jpeg'

import EntrepreneurIcons from '../../assets/icons/entrepeneur.png'
import MathsIcons from '../../assets/icons/maths.png'
import ScienceIcons from '../../assets/icons/science.png'
import WhiteboardIcons from '../../assets/icons/whiteboard.png'

const Yayasan = () => {

  return (
    <section className='antialiased'>
      <Navbar />

      <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply" style={{ backgroundImage: `url(${CoverImages})` }}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to={`/`} className="inline-flex justify-center items-center gap-2 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
              Get started
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
            <Link to={`/`} className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className='px-4 mx-auto max-w-screen-xl text-center space-y-10 py-10'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>We invest in the world’s potential</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={EntrepreneurIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={MathsIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={ScienceIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={WhiteboardIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
        </div>
      </section>

      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={CoverImages} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={CoverImages} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={CoverImages} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>


    </section>
  );
};

export default Yayasan;
