import React from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import CoverImages from '../../assets/images/cover-1.jpeg'
import { Link, useParams } from 'react-router-dom'

const NewsDetail = () => {
  return (
    <section className='antialiased'>
      <Navbar />

      <section className='container mx-auto py-10 px-5 md:px-0'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='w-full md:w-4/6 space-y-5 p-3'>
            <img loading="lazy" src={CoverImages} alt="" className='w-full rounded-xl' />
            <div className='space-y-1'>
              <h3 className='font-bold text-3xl text-gray-800'>Seminar Pendidikan di TK Al-Azhar</h3>
              <h4 className='text-gray-700'>2 Februari 2024</h4>
            </div>
            <p className='text-gray-700 text-justify indent-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam pariatur ipsum amet perferendis. Eos nihil natus, voluptate perferendis nobis autem hic, expedita temporibus dolore qui quidem, repudiandae doloremque sapiente commodi veritatis sint accusantium nesciunt dicta tenetur nulla dolorem dolorum ratione. Explicabo maxime facilis suscipit quod iure. Aperiam aut, dignissimos sunt cum vitae incidunt, itaque quidem voluptatem quia asperiores repellendus eligendi perspiciatis tempore distinctio veniam culpa, rerum dolorum ratione recusandae cupiditate reprehenderit facilis excepturi dolore eveniet! Aspernatur nisi quae nihil necessitatibus rem eius, officia dolore labore, laudantium voluptates eos doloremque, quod ipsa ad in placeat repellendus debitis! Ea impedit dolores similique quia, error iure repellat eaque magnam molestias voluptatum fuga cupiditate. Quae asperiores est, vero ipsa autem totam maxime non deleniti error laudantium nihil ducimus quod reprehenderit nostrum quaerat, laborum hic omnis. Consectetur beatae cupiditate ipsam ut aliquam quaerat cumque praesentium, aspernatur nulla maiores nesciunt accusantium. Optio, fugiat laboriosam deleniti praesentium placeat quas cumque odio esse laborum, aliquid doloremque possimus. Accusamus iusto voluptatum dignissimos est sit beatae consequatur incidunt aliquid debitis, porro dolor delectus, rerum vel quae maxime minus ab placeat rem similique, nisi alias fuga at suscipit quaerat! Ut voluptatum possimus quibusdam id quod nesciunt ipsa hic, dignissimos maxime cupiditate illo provident inventore nulla iste eaque reprehenderit, in accusamus animi obcaecati fugit labore. Quod aliquid ipsum expedita quasi. Debitis sint officia incidunt qui nostrum vel nesciunt repellat suscipit aspernatur aut sit, nulla ea vero adipisci expedita, mollitia non quam voluptatibus perspiciatis laboriosam, deleniti praesentium veniam? Voluptatum possimus perferendis maxime unde quibusdam temporibus reprehenderit commodi at ab debitis perspiciatis aliquid iusto culpa rerum, voluptatibus alias blanditiis error, mollitia ipsum vero nisi dolor magni! Quidem, dolores! Hic voluptatem tempore recusandae, optio iure vel sint impedit et necessitatibus. Officiis non eveniet, beatae sapiente dicta error dolorum vel officia corrupti velit quis in?</p>
          </div>
          <div className='w-full md:w-2/6 space-y-7 p-3'>
            <header>
              <h2 className='font-bold text-lg text-gray-900'>Berita lainnya</h2>
              <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, voluptatum.</p>
            </header>
            <ul className='space-y-4'>
              <li className='bg-gray-50 hover:bg-gray-100 cursor-pointer px-5 py-3 rounded-xl'>
                <h4 className='font-bold text-gray-900'>Seminar Pendidikan di TK Al-Azhar</h4>
                <p className='text-sm text-gray-700'>2 Desember 2019</p>
              </li>
              <li className='bg-gray-50 hover:bg-gray-100 cursor-pointer px-5 py-3 rounded-xl'>
                <h4 className='font-bold text-gray-900'>Seminar Pendidikan di TK Al-Azhar</h4>
                <p className='text-sm text-gray-700'>2 Desember 2019</p>
              </li>
              <li className='bg-gray-50 hover:bg-gray-100 cursor-pointer px-5 py-3 rounded-xl'>
                <h4 className='font-bold text-gray-900'>Seminar Pendidikan di TK Al-Azhar</h4>
                <p className='text-sm text-gray-700'>2 Desember 2019</p>
              </li>
            </ul>
            <Link to={`/news`} className="block underline text-center text-gray-700">Lainnya</Link>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  )
}

export default NewsDetail