import React from 'react'
import styles from './modulosCss/global.module.css'
import aboutStyle from './modulosCss/about.module.css'

export default function AboutMe() {
  return (
    <>
      <div className={aboutStyle.containerPrincipal}>
        <div class="text-center">
          <h1 className={aboutStyle.title}>Sobre mi</h1>
        </div>
        <div className={aboutStyle.container}>
          <div className={aboutStyle.avatar}>
            <div className=" avatar flex-col justify-center">
              <div className=" ml-36 w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/250/192/people" />
              </div>
            </div>
          </div>
          <div className={aboutStyle.text}>
            <p>
              Cortes y entusiasta, estoy interesado en TI y todo en su órbita.
              Me he sentido fascinado por la programación web, por ejemplo:
              desarrollo de aplicaciones y construcción de sitios web. Estoy
              ansioso por adquirir más experiencia y conocimiento en este campo.
              Por esta razón, estoy buscando una compañía dispuesta a ofrecerme
              una ubicación entre sus desarrolladores. A cambio, ofrecería mucho
              compromiso y sería una adición agradable y amigable para su
              equipo. Por lo tanto, actualmente estoy buscando un trabajo como
              desarrollador Front-end.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
