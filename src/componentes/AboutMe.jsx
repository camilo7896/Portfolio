import React from 'react'
import Habilities from './Habilities'
import aboutStyle from './modulosCss/about.module.css'

export default function AboutMe() {
  return (
    <>
      <div className={aboutStyle.containerPrincipal}>
        <div class={aboutStyle.title}>
          <h1 className={aboutStyle.title}>Sobre mi</h1>
        </div>
        <div className={aboutStyle.container}>
          <div className={aboutStyle.avatar}>
            <div className=" avatar flex-col justify-center">
              <div className=" ml-36 w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/fkhxb1y/foto-perfil.jpg" />
              </div>
            </div>
          </div>
          <div className={aboutStyle.text}>
            <p>
              Soy una persona cortés y entusiasta, interesado en ' TI ' y todo
              en su órbita. Me he sentido fascinado por la programación web, por
              ejemplo: desarrollo de aplicaciones y construcción de sitios web.
              Estoy ansioso por adquirir más experiencia y conocimiento en este
              campo. A cambio, ofrecería mucho compromiso y sería una adición
              agradable y amigable para su equipo de trabajo. Por esta razón,
              estoy buscando una compañía dispuesta a ofrecerme una ubicación en
              su equipo de trabajo como desarrollador Front-End.
            </p>
          </div>
        </div>
      </div>

      <div class={aboutStyle.title}>
        <h1 className={aboutStyle.title}>Habilidades</h1>
      </div>
      <Habilities />
    </>
  )
}
