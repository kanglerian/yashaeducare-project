import React from 'react'
import { Navbar } from './components/Navbar'

import CoverImages from '../../assets/images/cover-1.jpeg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='antialiased'>
      <Navbar />

      <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply" style={{ backgroundImage: `url(${CoverImages})` }}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl">Tentang Kami</h1>
          <p className="mb-8 text-base font-normal text-gray-300">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
      </section>

      <section className='container mx-auto space-y-5 py-10 px-5 md:px-0'>
        <header className='space-y-2 text-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Kami Memiliki Visi & Misi</h1>
          <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
        </header>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='mb-3 font-bold text-xl'>Visi</h2>
          <ul className='flex flex-col md:items-center list-decimal space-y-1 text-sm text-gray-700'>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, suscipit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro accusamus. Asperiores.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nam blanditiis ut nesciunt voluptates.</li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='mb-3 font-bold text-xl'>Misi</h2>
          <ul className='flex flex-col md:items-center list-decimal space-y-1 text-sm text-gray-700'>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, suscipit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro accusamus. Asperiores.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nam blanditiis ut nesciunt voluptates.</li>
          </ul>
        </div>
      </section>

      <section className='bg-gray-800 text-white'>
        <div className='container mx-auto space-y-5 py-10 px-5 md:px-0'>
          <header className='space-y-2 text-center'>
            <h1 className='text-2xl font-bold'>Struktur Organisasi</h1>
            <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</p>
          </header>
          <iframe className='rounded-xl' style={{ width: '100%', height: 293 }} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1e4RWDo1usyqcsNPzZ79Ww5EuzB78nSOp%26export%3Ddownload" />
        </div>
      </section>

      
      <footer className='container mx-auto py-10 px-5'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>
            <div className='w-full md:w-4/6 space-y-2'>
              <h2 className='font-bold text-gray-900'>Yayasan Sharhana Educare</h2>
              <p className='text-sm text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, necessitatibus!</p>
              <p className='text-sm text-gray-700'>Jl. Ir. H. Djuanda No.106, Kec. Cipedes, Kota Tasikmalaya, Jawa Barat.</p>
            </div>
            <div className='w-full md:w-auto space-y-2'>
              <h2 className='font-bold text-gray-900'>Sosial Media</h2>
              <ul className='text-xs space-y-1 text-wrap'>
                <li>Instagram: @yashaeducare</li>
                <li>Youtube: Yasha Educare Channel</li>
              </ul>
            </div>
            <div className='w-full md:w-auto space-y-2'>
              <h2 className='font-bold text-gray-900'>Kontak Kami</h2>
              <ul className='text-xs space-y-1 text-wrap'>
                <li>No. Telpon: +62812 8650 1015</li>
                <li>Email: yashaeducare@gmail.com</li>
              </ul>
            </div>
          </div>
      </footer>

      <footer className='bg-gray-800 py-3 px-5'>
        <div className="container mx-auto">
          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <p className='text-gray-200 text-xs order-2 md:order-none'>Copyright © 2024 Yayasan Sharhana Educare. All Rights Reserved.</p>
            <div className='text-xs flex items-center gap-5 text-white order-1 md:order-none'>
              <span>Kebijakan Privasi</span>
              <span>Perizinan</span>
              <span>Penggunaan Aplikasi</span>
            </div>
          </div>
        </div>
      </footer>

    </section>
  )
}

export default About