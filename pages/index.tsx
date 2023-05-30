// import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import Map from '../components/Map'

export default function Home (): JSX.Element {
  return (
    <Layout>
      <section className='text-center'>
        <h1 className='text-8xl mt-16'>¿Qué es PointWall?</h1>
        <p className='text-2xl max-w-prose mx-auto my-[1.25em]'>
          PointWall es una galería colaborativa digital de arte urbano. Liga la ubicación con la obra, permite ver los cambios con el paso del tiempo y los artistas que intervinieron. Cualquier persona desde cualquier parte del mundo puede subir sus fotos...
        </p>
        <p className='text-4xl mb-8'>¿Estás listo para colaborar con un <span>mural</span><span>graffiti</span> de tu barrio?</p>
      </section>
      <section className='w-full overflow-hidden group'>
        <Link href='/mapa' className='text-center my-8 relative'>
          <span className='text-white text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-[10] hidden group-hover:block transition'>Ir al mapa</span>
          <span className='group-hover:brightness-50 transition'>
            <Map />
          </span>
        </Link>
      </section>
      <section className='text-center my-16'>
        <h2 className='text-4xl font-semibold'>Formulario colaborativo</h2>
        <p className='text-2xl my-4'>Formulario para subir un mural o graffiti.</p>
        <Link href='/contribucion' className='css-form-link text-2xl relative inline-block my-4 border-2 border-blue-200 px-[2em] py-[.5em] text-blue-200 after:bg-blue-200'>Formulario</Link>
      </section>
    </Layout>
  )
}
