import React from 'react'
import aboutStyle from './modulosCss/about.module.css'

const Habilities = () => {
  return (
    <>
      <div className={aboutStyle.containerHabilities}>
        <div className={aboutStyle.habilitiesDash}>
          <h4 className={aboutStyle.subtitle}>HTML 5</h4>
          <div
            className="radial-progress bg-sky-900 text-primary-content border-4 border-sky-900"
            style={{ '--value': 90 }}
          >
            90%
          </div>
        </div>
        {/* Css */}
        <div className={aboutStyle.habilitiesDash}>
          <h4 className={aboutStyle.subtitle}>CSS 5</h4>
          <div
            className="radial-progress bg-sky-900 text-primary-content border-4 border-sky-900"
            style={{ '--value': 90 }}
          >
            90%
          </div>
        </div>
        <div className={aboutStyle.habilitiesDash}>
          <h4 className={aboutStyle.subtitle}>GITHUB</h4>
          <div
            className="radial-progress bg-sky-900 text-primary-content border-4 border-sky-900"
            style={{ '--value': 80 }}
          >
            80%
          </div>
        </div>
        <div className={aboutStyle.habilitiesDash}>
          <h4 className={aboutStyle.subtitle}>JAVASCRIPT</h4>
          <div
            className="radial-progress bg-sky-900 text-primary-content border-4 border-sky-900"
            style={{ '--value': 60 }}
          >
            60%
          </div>
        </div>
        <div className={aboutStyle.habilitiesDash}>
          <h4 className={aboutStyle.subtitle}>BOOTSTRAP</h4>
          <div
            className="radial-progress bg-sky-900 text-primary-content border-4 border-sky-900"
            style={{ '--value': 50 }}
          >
            50%
          </div>
        </div>

        <div className={aboutStyle.habilitiesDash}>
          <h4 className={aboutStyle.subtitle}>REACT JS</h4>
          <div
            className="radial-progress bg-sky-900 text-primary-content border-4 border-sky-900"
            style={{ '--value': 70 }}
          >
            70%
          </div>
        </div>
      </div>
    </>
  )
}

export default Habilities
