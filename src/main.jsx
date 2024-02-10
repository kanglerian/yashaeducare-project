import React from 'react'
import ReactDOM from 'react-dom/client'
import Yayasan from './pages/Yayasan/Yayasan'
import Metaforstudy from './pages/Unit/Metaforstudy/Metaforstudy';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './assets/css/index.css'
import './assets/css/all.min.css'

import About from './pages/Yayasan/About';
import News from './pages/Yayasan/News';
import NewsDetail from './pages/Yayasan/NewsDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Yayasan/>,
  },
  {
    path: "/news",
    element: <News/>,
  },
  {
    path: "/news-detail/:id",
    element: <NewsDetail/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/unit/metaforstudy",
    element: <Metaforstudy/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
