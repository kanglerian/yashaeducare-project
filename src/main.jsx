import React from 'react'
import ReactDOM from 'react-dom/client'
import Yayasan from './pages/Yayasan/Yayasan'
import Metaforstudy from './pages/Unit/Metaforstudy';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './assets/css/index.css'
import './assets/css/all.min.css'

import About from './pages/Yayasan/About';
import NewsDetail from './pages/Yayasan/NewsDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Yayasan/>,
  },
  {
    path: "/news/detail",
    element: <NewsDetail/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/metaforstudy",
    element: <Metaforstudy/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
