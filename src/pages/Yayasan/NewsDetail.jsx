import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import CoverImages from '../../assets/images/cover-1.jpeg'

import DataJSON from '../../databases/yayasan.json'

const NewsDetail = () => {

  const [profile, setProfile] = useState({});
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState({});

  const { id } = useParams();

  const getData = async () => {
    setProfile(DataJSON.profile);
    setNews(DataJSON.news);
    let newsJSON = DataJSON.news;
    let newsResults = newsJSON.find((ne) => ne.id == id);
    setShowNews(newsResults);
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


      <section className='container mx-auto py-10 px-5 md:px-0'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='w-full md:w-4/6 space-y-5 p-3'>
            <img loading="lazy" src={getImages(showNews.cover)} alt="" className='w-full rounded-xl' />
            <div className='space-y-1'>
              <h3 className='font-bold text-3xl text-gray-800'>{showNews.title}</h3>
              <h4 className='text-gray-700'>{showNews.date}</h4>
            </div>
            <p className='text-gray-700 text-justify indent-10'>{showNews.description}</p>
          </div>
          <div className='w-full md:w-2/6 space-y-7 p-3'>
            <header>
              <h2 className='font-bold text-lg text-gray-900'>Berita lainnya</h2>
              <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, voluptatum.</p>
            </header>
            <ul className='space-y-4'>
              {
                news.map((ne, index) =>
                  <Link to={`/news-detail/${ne.id}`} key={index}>
                    <li className='bg-gray-50 hover:bg-gray-100 cursor-pointer px-5 py-3 rounded-xl'>
                      <h4 className='font-bold text-gray-900'>{ne.title}</h4>
                      <p className='text-sm text-gray-700'>{ne.date}</p>
                    </li>
                  </Link>
                )
              }
            </ul>
            <Link to={`/news`} className="block underline text-center text-gray-700">Lainnya</Link>
          </div>
        </div>
      </section>
      <Footer data={profile} />
    </section>
  )
}

export default NewsDetail