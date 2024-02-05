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

    </section>
  )
}

export default About