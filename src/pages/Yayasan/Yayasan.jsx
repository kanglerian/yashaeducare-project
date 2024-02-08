import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import CoverImages from '../../assets/images/cover-1.jpeg'
import GoogleLogo from '../../assets/logos/google-logo.png'

import EntrepreneurIcons from '../../assets/icons/entrepeneur.png'
import MathsIcons from '../../assets/icons/maths.png'
import ScienceIcons from '../../assets/icons/science.png'
import WhiteboardIcons from '../../assets/icons/whiteboard.png'
import WomanIcons from '../../assets/icons/woman.png'

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

      <section className='container mx-auto text-center space-y-10 py-10 px-5 md:px-0'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>We invest in the world’s potential</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={EntrepreneurIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={MathsIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={ScienceIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={WhiteboardIcons} alt="" className='w-10 h-10' />
            <h2 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
          </div>
        </div>
      </section>

      <section className="relative w-full container mx-auto py-10">
          <OwlCarousel className='owl-theme' items={1} loop autoplay>
            {/* Item 1 */}
            <div className="relative item h-56 md:h-96">
              <img loading="lazy" src={CoverImages} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            {/* Item 2 */}
            <div className="relative item h-56 md:h-96">
              <img loading="lazy" src={CoverImages} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            {/* Item 3 */}
            <div className="relative item h-56 md:h-96">
              <img loading="lazy" src={CoverImages} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </OwlCarousel>
      </section>

      <section className='container mx-auto text-center space-y-10 py-10 px-5 md:px-0'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Kami Memiliki 3 Unit Usaha</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={GoogleLogo} alt="" className='h-14' />
            <h2 className='font-medium text-gray-900'>Metafor Study Psikologi</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
            <Link to={`/`} className='text-sm text-center bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg text-gray-800'>Lihat selengkapnya</Link>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={GoogleLogo} alt="" className='h-14' />
            <h2 className='font-medium text-gray-900'>PAUD Bintang Ilmu</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
            <Link to={`/`} className='text-sm text-center bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg text-gray-800'>Lihat selengkapnya</Link>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2 p-3 rounded-xl'>
            <img loading="lazy" src={GoogleLogo} alt="" className='h-14' />
            <h2 className='font-medium text-gray-900'>Bimbel Yasha</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, similique excepturi! Sequi unde atque dolorum!</p>
            <Link to={`/`} className='text-sm text-center bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg text-gray-800'>Lihat selengkapnya</Link>
          </div>
        </div>
      </section>

      <section className='container mx-auto py-10 px-5 md:px-0'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div>
            <iframe className='w-full aspect-video rounded-2xl' src="https://www.youtube.com/embed/8J66JxvmEzo?si=zmK-no5sEdmw7bwF" title="YouTube video player" allowfullscreen></iframe>
          </div>
          <div className='space-y-3'>
            <h2 className='font-bold text-2xl'>Video Profil</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, porro totam. Beatae quisquam natus aspernatur dicta recusandae ipsa molestias reprehenderit omnis at tempora, ea, facere, nisi autem laboriosam numquam laudantium atque dolorum! Porro illum molestias inventore sed, aliquid doloribus? Quo porro eos omnis nam eveniet perspiciatis atque deleniti excepturi cupiditate adipisci, consequatur esse suscipit quis eligendi, tempore harum delectus, dicta eius nulla. Quia ad, voluptas impedit maxime dolorem quod esse dolores ex totam alias magnam, inventore in autem.</p>
            <button className='bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded-lg'>Lihat selengkapnya</button>
          </div>
        </div>
      </section>

      <section className='container mx-auto text-center space-y-10 py-10 px-5 md:px-0'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Galeri Foto Kegiatan YashaEducare</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <img loading="lazy" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img loading="lazy" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img loading="lazy" className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className='py-10 bg-gray-900 px-5 md:px-0'>
        <div className="container mx-auto text-center space-y-10">
          <header className='space-y-2'>
            <h1 className='text-2xl font-bold text-white'>Bekerjasama dan Berkolaborasi</h1>
            <p className='text-base text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
          </header>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16 px-5'>
            <div>
              <img loading="lazy" src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
            </div>
            <div>
              <img loading="lazy" src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
            </div>
            <div>
              <img loading="lazy" src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
            </div>
            <div>
              <img loading="lazy" src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
            </div>
            <div>
              <img loading="lazy" src={GoogleLogo} alt="" className='cursor-pointer grayscale hover:grayscale-0 transition ease-in-out' />
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto text-center space-y-10 py-10 px-5 md:px-0'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Berita dan Informasi</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Link to={`/news-detail`} className='flex flex-col items-center justify-center gap-2'>
            <img loading="lazy" src={CoverImages} alt="" className='w-full rounded-xl' />
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla incidunt repudiandae qui cupiditate repellat...</p>
            <div>
              <h3 className='font-bold text-gray-800'>Seminar Pendidikan di TK Al-Azhar</h3>
              <h4 className='text-sm text-gray-700'>2 Februari 2024</h4>
            </div>
          </Link>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img loading="lazy" src={CoverImages} alt="" className='w-full rounded-xl' />
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla incidunt repudiandae qui cupiditate repellat...</p>
            <div>
              <h3 className='font-bold text-gray-800'>Seminar Pendidikan di TK Al-Azhar</h3>
              <h4 className='text-sm text-gray-700'>2 Februari 2024</h4>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img loading="lazy" src={CoverImages} alt="" className='w-full rounded-xl' />
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla incidunt repudiandae qui cupiditate repellat...</p>
            <div>
              <h3 className='font-bold text-gray-800'>Seminar Pendidikan di TK Al-Azhar</h3>
              <h4 className='text-sm text-gray-700'>2 Februari 2024</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto text-center space-y-10 py-10 px-5 md:px-0'>
        <header className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Apa Kata Mereka?</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img loading="lazy" src={WomanIcons} alt="" className='w-16 h-16 rounded-xl' />
            <p className='italic text-gray-700'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla incidunt repudiandae qui cupiditate repellat!"</p>
            <div>
              <h3 className='font-bold text-gray-800'>Naimatus Sya'diah</h3>
              <h4 className='text-sm text-gray-700'>Software Developer</h4>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img loading="lazy" src={WomanIcons} alt="" className='w-16 h-16 rounded-xl' />
            <p className='italic text-gray-700'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla incidunt repudiandae qui cupiditate repellat!"</p>
            <div>
              <h3 className='font-bold text-gray-800'>Naimatus Sya'diah</h3>
              <h4 className='text-sm text-gray-700'>Software Developer</h4>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img loading="lazy" src={WomanIcons} alt="" className='w-16 h-16 rounded-xl' />
            <p className='italic text-gray-700'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla incidunt repudiandae qui cupiditate repellat!"</p>
            <div>
              <h3 className='font-bold text-gray-800'>Naimatus Sya'diah</h3>
              <h4 className='text-sm text-gray-700'>Software Developer</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

    </section>
  );
};

export default Yayasan;
