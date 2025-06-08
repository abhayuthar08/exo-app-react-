import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full fixed z-[999] bg-zinc-900 shadow-md h-[11%]'>
      <div className='max-w-screen-2xl mx-auto px-5 py-4 sm:py-5 sm:px-28 flex items-center justify-between text-white'>

        {/* Logo */}
        <div className='logo flex items-center gap-2'>
          <h1 className='pt-2 font-semibold text-lg text-zinc-200'>Exo App</h1>
          <svg viewBox="0 0 95 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 text-white">
            {/* Keep your SVG paths here */}
            <path d="M7.70542 17.0085C10.8808..." fill="currentColor" />
          </svg>
        </div>

        {/* Hamburger for small screen */}
        <div className='sm:hidden text-3xl text-white cursor-pointer'>
          <IoMenuSharp />
        </div>

        {/* Nav Links */}
        <div className='hidden sm:flex gap-10'>
          {["Home", "About", "Contact", "Pricing"].map((item, index) => (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative text-sm font-light transition duration-300 hover:text-zinc-300 
                ${isActive ? "text-zinc-300" : "text-white"}`
              }
            >
              <span className="hover-underline">{item}</span>
            </NavLink>
          ))}
        </div>

      </div>

      {/* Add some underline animation with CSS */}
      <style>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #d4d4d8; /* zinc-300 */
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
