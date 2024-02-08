import React from 'react'

export const Footer = () => {
  return (
    <>
      <section className='bg-gray-900 py-10 px-5'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>
            <div className='w-full md:w-4/6 text-white space-y-2'>
              <h2>Yayasan Sharhana Educare</h2>
              <p className='text-sm text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, necessitatibus!</p>
              <p className='text-sm text-gray-300'>Jl. Ir. H. Djuanda No.106, Kec. Cipedes, Kota Tasikmalaya, Jawa Barat.</p>
            </div>
            <div className='w-full md:w-auto text-white space-y-2'>
              <h2>Sosial Media</h2>
              <ul className='text-xs space-y-1 text-wrap'>
                <li>Instagram: @yashaeducare</li>
                <li>Youtube: Yasha Educare Channel</li>
              </ul>
            </div>
            <div className='w-full md:w-auto text-white space-y-2'>
              <h2>Kontak Kami</h2>
              <ul className='text-xs space-y-1 text-wrap'>
                <li>No. Telpon: +62812 8650 1015</li>
                <li>Email: yashaeducare@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-800 py-3 px-5'>
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
      </section>
    </>
  )
}
