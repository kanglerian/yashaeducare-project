import React from 'react'

import CoverImages from '../../assets/images/cover-1.jpeg'

import { Navbar } from './components/Navbar'

const NewsDetail = () => {
  return (
    <section className='antialiased'>
      <Navbar />

      <section className='container mx-auto space-y-5 py-10 px-5 md:px-0'>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-7/12 p-3">
            <div className="bg-white border border-gray-200 space-y-5 p-4 rounded-xl">
              <img src={CoverImages} alt="" className='rounded-xl' />
              <div>
                <h3 className='font-bold text-2xl text-gray-800'>Seminar Pendidikan di TK Al-Azhar</h3>
                <h4 className='text-base text-gray-700'>2 Februari 2024</h4>
              </div>
              <p className='text-gray-700 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea incidunt perferendis debitis odio rerum provident facilis ducimus inventore, praesentium corrupti asperiores dolore nulla vel. Iusto fugiat aspernatur adipisci reiciendis ad cupiditate magnam laborum officia, impedit corrupti voluptatibus quas provident incidunt perspiciatis libero suscipit minus. Minima incidunt quasi error sit sint quis, rerum quam debitis aliquid doloribus expedita placeat enim labore culpa iste? Asperiores dolorum ipsam, voluptatem odit aperiam repellat repudiandae soluta adipisci, doloribus modi nobis sit ducimus tempore aspernatur alias quas doloremque pariatur obcaecati deleniti, vero reprehenderit iusto dignissimos excepturi? Dolorum itaque repellendus voluptatibus quos deleniti officia cumque eaque?</p>
            </div>
          </div>
          <div className="w-full md:w-5/12 p-3">
            <div className="bg-white space-y-5 mt-3">
              <div className='flex justify-center items-center gap-4'>
                <img src={CoverImages} alt="" className='w-1/3 rounded-lg' />
                <div className='w-2/3'>
                  <h2 className='text-sm font-bold text-gray-900'>Seminar Pendidikan di TK Al-Azhar</h2>
                  <h4 className='text-sm text-gray-700'>2 Februari 2024</h4>
                </div>
              </div>
              <div className='flex justify-center items-center gap-4'>
                <img src={CoverImages} alt="" className='w-1/3 rounded-lg' />
                <div className='w-2/3'>
                  <h2 className='text-sm font-bold text-gray-900'>Seminar Pendidikan di TK Al-Azhar</h2>
                  <h4 className='text-sm text-gray-700'>2 Februari 2024</h4>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='text-sm text-gray-900 bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-lg'>Lihat selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  )
}

export default NewsDetail