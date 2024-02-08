import React from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import CoverImages from '../../assets/images/cover-1.jpeg'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <section className='antialiased'>
      <Navbar />

      <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply" style={{ backgroundImage: `url(${CoverImages})` }}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl">Berita & Informasi</h1>
          <p className="mb-8 text-base font-normal text-gray-300">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
      </section>

      <section className='container mx-auto text-center py-10 px-5 md:px-0'>
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
      <Footer />
    </section>
  )
}

export default News