import React from 'react'

export const Footer = (props) => {
  return (
    <>
      <section className='bg-gray-900 py-10 px-5'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>
            <div className='w-full md:w-4/6 text-white space-y-2'>
              <h2 className='font-bold'>{props.data.name}</h2>
              <p className='text-sm text-gray-300'>
                {props.data.description}
              </p>
              <p className='text-sm text-gray-300'>{props.data.address}</p>
            </div>
            <div className='w-full md:w-auto text-white space-y-2'>
              <h2>Sosial Media</h2>
              <ul className='text-xs space-y-1 text-wrap'>
                <li>Instagram: {props.data.instagram}</li>
                <li>Youtube: {props.data.youtube}</li>
              </ul>
            </div>
            <div className='w-full md:w-auto text-white space-y-2'>
              <h2>Kontak Kami</h2>
              <ul className='text-xs space-y-1 text-wrap'>
                <li>No. Telpon: {props.data.phone}</li>
                <li>Email: {props.data.email}</li>
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
