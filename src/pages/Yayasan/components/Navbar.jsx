import React, { useEffect, useRef, useState } from 'react';
import YashaLogo from '../../../assets/logos/yashaeducare-logo.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownUnit, setDropdownUnit] = useState(false);

  const pathUrl = window.location.pathname;

  const menuRef = useRef(null);
  const dropdownUnitRef = useRef(null);

  useEffect(() => {

    const handleOutside = (event) => {
      if (dropdownUnitRef.current && !dropdownUnitRef.current.contains(event.target)) {
        setDropdownUnit(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleOutside);
  }, []);
  return (
    <nav className="bg-white border-gray-200">
      <div className="container text-sm flex flex-wrap items-center justify-between mx-auto p-4" ref={menuRef}>
        <Link to={`/`}
          className="flex items-center"
        >
          <img loading="lazy"
            src={YashaLogo}
            className="h-16"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Buka menu utama</span>
          <i className="fa-solid fa-bars text-[15px]"></i>
        </button>
        <div className={`md:block md:w-auto ${isOpen ? 'w-full' : 'hidden'}`}>
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to={`/`}
                className={`block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 ${(pathUrl === '/') ? 'text-white md:text-primary-500' : 'text-gray-900 md:hover:text-primary-500 '}`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${(pathUrl === '/majelis') ? 'text-white md:text-primary-500' : 'text-gray-900 md:hover:text-primary-500 '}`}
              >
                Majelis Ta'lim
              </Link>
            </li>
            <li className="relative" ref={dropdownUnitRef}>
              <button
                onClick={() => setDropdownUnit(!dropdownUnit)}
                className="flex items-center justify-between gap-2 w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 md:w-auto"
              >
                Unit Usaha
                <i className="fa-solid fa-chevron-down text-[12px]"></i>
              </button>
              {/* Dropdown menu */}
              <div
                className={`z-10 ${dropdownUnit ? 'absolute' : 'hidden'} top-10 md:top-8 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      to={`/`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pengaturan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pendapatan
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to={`/news`}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${(pathUrl === '/news' || pathUrl === '/news-detail') ? 'text-white md:text-primary-500' : 'text-gray-900 md:hover:text-primary-500 '}`}
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                to={`/about`}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${(pathUrl == '/about') ? 'text-white md:text-primary-500' : 'text-gray-900 md:hover:text-primary-500 '}`}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className="block py-2 px-3 text-gray-900 rounded bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
