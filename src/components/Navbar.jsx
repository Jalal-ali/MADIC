import React from 'react'
import Logo from '../assets/logo/site-logo.png'

const Navbar = () => {
  return (
    <>
    <header className="text-slate-700 container relative  flex flex-col overflow-hidden max-w-7xl w-full mx-auto px-6 py-4 lg:flex-row lg:items-center">
  <a
    href="javascript:void(0)"
    className="flex items-center whitespace-nowrap text-2xl font-black"
  >
    <a href='/' className="mr-2 w-18">
      <img src={Logo} alt="logo" className='-mb-1' />
    </a>
    
  </a>
  <input type="checkbox" className="peer hidden" id="navbar-open" />
  <label
    className="absolute top-5 right-5 cursor-pointer lg:hidden"
    htmlFor="navbar-open"
  >
    <svg
      className="h-7 w-7"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </label>
  <nav
    aria-label="Header Navigation"
    className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
  >
    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li className="lg:mr-12">
        <a
          className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          Products
        </a>
      </li>
      <li className="lg:mr-12">
        <a
          className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          Creators
        </a>
      </li>
      <li className="lg:mr-12">
        <a
          className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          Blog
        </a>
      </li>
      <li className="lg:mr-12">
        <a
          className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
    <hr className="mt-4 w-full lg:hidden" />
    <div className="my-4 flex items-center space-x-2 space-y-2 lg:my-0 lg:ml-auto lg:space-x-2 lg:space-y-0">
     
      <a
        href="javascript:void(0)"
        title=""
        className="whitespace-nowrap rounded-full px-8 py-3 border border-[#9147FF] font-medium text-black transition-all duration-200 "
      >
        Login
      </a>
      <a
        href="javascript:void(0)"
        title=""
        className="whitespace-nowrap rounded-full bg-[#9147FF] px-8 py-3 font-medium text-white transition-all duration-200"
      >
        Sign Up
      </a>
    </div>
  </nav>
</header>

    </>
  )
}

export default Navbar