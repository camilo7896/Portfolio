import React, { useState } from 'react'
import Data from '../helpers/data.json'
import styles from './modulosCss/portfolioCard.module.css'
export default function Portfolio() {
  const [dataPortfolio, setdataPorfolio] = useState(Data)

  return (
    <>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white pb-5 pt-5">
        {dataPortfolio.portfolio.map((item) => {
          return (
            <div className="m-2">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={item.img} alt="Shoes" />
                </figure>
                <div className="bg-slate-800 card-body">
                  <h2 className="text-center card-title">{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="flex justify-center card-actions">
                    <button className="btn btn-outline btn-accent">
                      <a href={item.gitHub} target="_blank">
                        View GitHub
                      </a>{' '}
                    </button>
                    <button className="btn btn-outline btn-accent">
                      {' '}
                      <a href={item.despliegue} target="_blank">
                        View Project
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
