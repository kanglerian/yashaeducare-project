import React, { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite';

import CoverImages from '../../assets/images/cover-1.jpeg'
import GoogleLogo from '../../assets/logos/google-logo.png'
import YashaLogo from '../../assets/logos/yashaeducare-logo.png'

import EntrepreneurIcons from '../../assets/icons/entrepeneur.png'
import MathsIcons from '../../assets/icons/maths.png'
import ScienceIcons from '../../assets/icons/science.png'
import WhiteboardIcons from '../../assets/icons/whiteboard.png'

const Yayasan = () => {

  const carouselRef = useRef(null);

  useEffect(() => {
    new Carousel(carouselRef.current);
  }, []);

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

      <section ref={carouselRef} className="relative w-full container mx-auto py-10" data-carousel="slide">
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
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to={0} />
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to={1} />
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to={2} />
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <i className="fa-solid fa-angle-left text-white"></i>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <i className="fa-solid fa-angle-right text-white"></i>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </section>

      <section className='px-4 mx-auto max-w-screen-xl text-center space-y-10 py-10'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Kami Memiliki 3 Unit Usaha</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={GoogleLogo} alt="" className='h-14' />
            <h2 className='font-medium text-gray-900'>Metafor Study Psikologi</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
            <Link to={`/`} className='text-sm text-center bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg text-gray-800'>Lihat selengkapnya</Link>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={GoogleLogo} alt="" className='h-14' />
            <h2 className='font-medium text-gray-900'>PAUD Bintang Ilmu</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
            <Link to={`/`} className='text-sm text-center bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg text-gray-800'>Lihat selengkapnya</Link>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img src={GoogleLogo} alt="" className='h-14' />
            <h2 className='font-medium text-gray-900'>Bimbel Yasha</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
            <Link to={`/`} className='text-sm text-center bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg text-gray-800'>Lihat selengkapnya</Link>
          </div>
        </div>
      </section>

      <section className='px-4 mx-auto max-w-screen-xl text-center space-y-10 py-10'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Dokumentasi Kegiatan YashaEducare</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className='mx-auto text-center space-y-10 py-10 bg-gray-900'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-white'>Bekerjasama dan Berkolaborasi</h1>
          <p className='text-base text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16 px-5'>
          <div>
            <img src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
          </div>
          <div>
            <img src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
          </div>
          <div>
            <img src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
          </div>
          <div>
            <img src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
          </div>
          <div>
            <img src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
          </div>
        </div>
      </section>

      <section className='px-4 mx-auto max-w-screen-xl text-center space-y-10 py-10'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Apa Kata Mereka?</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
        </div>
      </section>

      <footer className='mx-auto bg-gray-900'>
        <div className='flex items-center justify-between py-10 px-5'>
          <div className='w-1/3 px-4 text-white space-y-2'>
            <h2>Yayasan Sharhana Educare</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, necessitatibus!</p>
          </div>
          <div className='w-1/3 px-4 text-white space-y-2'> 
            <h2>Kontak Kami</h2>
            <ul className='text-xs space-y-1 text-wrap'>
              <li>Whatsapp: 081286501015</li>
              <li>Email: yashaeducare@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between bg-gray-800 py-3 px-5'>
          <p className='text-gray-200 text-xs'>Copyright © 2024 Yayasan Sharhana Educare. All Rights Reserved.</p>
          <div className='text-xs flex items-center gap-5 text-white'>
            <span>Kebijakan Privasi</span>
            <span>Perizinan</span>
            <span>Penggunaan Aplikasi</span>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default Yayasan;
