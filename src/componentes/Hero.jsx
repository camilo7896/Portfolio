import React from 'react'
import styles from '../componentes/modulosCss/hero.module.css'
function Hero() {
  return (
    <>
      <div className="hero min-h-screen h-14 ">
        <div className={styles.boxHero}></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold">Hello my name is</h3>
            <h1 className="text-5xl font-bold pb-2">Cristian García</h1>
            <h2 className="text-3xl font-bold pb-10">Front-End Developer</h2>
            <button className="btn btn-primary">contact me</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
