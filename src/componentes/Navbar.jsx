import React from 'react'
import '../index.css'
import '../App.css'
import Contact from './Contact'
import { Routes, Route, Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Portfolio from '../componentes/Portfolio'
import AboutMe from '../componentes/AboutMe'

function Navbar() {
  return (
    <>
      <div className="bg-info-content text-white ring-2 navbar">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info-content rounded-box w-52"
            >
              <li>
                <Link to="/">Inicio</Link>
                <Link to="Contact">Contacto</Link>
                <Link to="Portfolio">Proyectos</Link>
                <Link to={'AboutMe'}>Sobre mi</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Cristian Garcia
          </Link>
        </div>

        <div className="navbar-end">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src="https://i.ibb.co/zb5Xh8H/Imagen2.png" />
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="AboutMe" element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default Navbar
