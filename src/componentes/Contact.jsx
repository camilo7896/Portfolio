import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './modulosCss/global.module.css'
import styleForm from './modulosCss/form.module.css'

export default function Contact() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const includePhone = watch('incliudePhone')

  return (
    <>
      <h1 className={styles.title}>Contact</h1>
      <div className={styleForm.containerForm}>
        {/* form */}
        <div className={styleForm.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inpus flex flex-col justify-center">
              <div className=" p-2 boxImput">
                <input
                  type="text"
                  placeholder="Nombres"
                  className=" input input-bordered input-warning  w-full max-w-xs"
                  {...register('nombre', {
                    required: true,
                  })}
                />
                {errors.nombre?.type === 'required' && (
                  <div className="alert alert-warning  shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Por favor ingrese su Nombre</span>
                    </div>
                  </div>
                )}
              </div>
              <div className=" p-2 boxImput">
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="input input-bordered input-warning text-black  w-full max-w-xs"
                  {...register('apellido', {
                    required: true,
                  })}
                />
                {errors.apellido?.type === 'required' && (
                  <div className="alert alert-warning  shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Por favor ingrese su apellido</span>
                    </div>
                  </div>
                )}
              </div>
              <div className=" p-2 boxImput">
                <input
                  type="mail"
                  placeholder="Email"
                  className="input input-bordered input-warning  w-full max-w-xs text-black  "
                  {...register('Email', {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors.Email?.type === 'pattern' && (
                  <div className="alert alert-warning  shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Formato Email incorrecto</span>
                    </div>
                  </div>
                )}
              </div>
              <div className=" p-2 boxImput">
                <select
                  className=" p-2 boxImput text-black  "
                  {...register('Pais')}
                >
                  <option value="es">Colombia</option>
                  <option value="it">Italia</option>
                  <option value="fr">Francia</option>
                  <option value="es">España</option>
                  <option value="en">Estados Unidos</option>
                  <option value="en">Otro</option>
                </select>
              </div>
              <div>
                <label>¿ Incluir Telefono ?</label>
                <input type="checkbox" {...register('includePhone')} />
              </div>
              {includePhone && (
                <div>
                  <label>Telefono</label>
                  <input type="tel" {...register('phone')} />
                </div>
              )}

              <div className={styleForm.textArea}>
                <textarea
                  className="textarea textarea-warning text-black  "
                  placeholder="Comentario"
                  {...register('Mensaje')}
                ></textarea>
              </div>
            </div>
            <button className="btn btn-accent m-5">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
