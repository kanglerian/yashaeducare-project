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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Yayasan/>,
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
