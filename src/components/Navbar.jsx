import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="text-slate-700 container relative  flex flex-col overflow-hidden max-w-7xl w-full mx-auto px-1 py-4 lg:flex-row lg:items-center">
  <a
    href="#"
    className="flex items-center whitespace-nowrap text-2xl font-black"
  >
    <span className="mr-2 w-8">
      <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
    </span>
    spline
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
          Components
        </a>
      </li>
      <li className="lg:mr-12">
        <a
          className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          Pricing
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
      <li className="lg:mr-12">
        <a
          className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
          href="#"
        >
          FAQ
        </a>
      </li>
    </ul>
    <hr className="mt-4 w-full lg:hidden" />
    <div className="my-4 flex items-center space-x-2 space-y-2 lg:my-0 lg:ml-auto lg:space-x-2 lg:space-y-0">
     
      <a
        href="#"
        title=""
        className="whitespace-nowrap rounded-full px-8 py-3 border border-[#9147FF] font-medium text-black transition-all duration-200 "
      >
        Login
      </a>
      <a
        href="#"
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