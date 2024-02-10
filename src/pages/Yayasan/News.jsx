import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import CoverImages from '../../assets/images/cover-1.jpeg'

import DataJSON from '../../databases/yayasan.json'

const News = () => {
  const [profile, setProfile] = useState({});
  const [news, setNews] = useState([]);

  const getData = async () => {
    setProfile(DataJSON.profile);
    setNews(DataJSON.news);
  }

  const getImages = (name) => {
    switch (name) {
      case 'Images':
        return Images;
      case 'CoverImages':
        return CoverImages;
      default:
        return null;
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
          {
            news.map((ne, index) =>
              <Link to={`/news-detail/${ne.id}`} key={index} className='flex flex-col items-center justify-center gap-2'>
                <img loading="lazy" src={getImages(ne.cover)} alt="" className='w-full rounded-xl' />
                <p className='text-gray-700'>{ne.description}</p>
                <div>
                  <h3 className='font-bold text-gray-800'>{ne.title}</h3>
                  <h4 className='text-sm text-gray-700'>{ne.date}</h4>
                </div>
              </Link>
            )
          }
        </div>
      </section>
      <Footer data={profile} />
    </section>
  )
}

export default News