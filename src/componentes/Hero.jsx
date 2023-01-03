import React from 'react'
import styles from '../componentes/modulosCss/hero.module.css'
import { Routes, Route, Link } from 'react-router-dom'
function Hero() {
  return (
    <>
      <div className="hero min-h-screen h-14 ">
        <div className={styles.boxHero}></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold">Hola mi nombre es</h3>
            <h1 className="text-5xl font-bold pb-2">Cristian García</h1>
            <h2 className="text-3xl font-bold pb-10">Front-End Developer</h2>
            <Link to="Contact">
              <button className="btn btn-primary">Contactame</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
