import React from 'react'
import experienceBg from '../assets/experience.jpg'

const Experience = () => {
  return (
    <div id='experience' className='h-screen w-full relative'>

        <img src={experienceBg} className='w-full h-screen object-cover' alt='background experience' />

        <div className='h-full w-full flex absolute top-0 left-0'>

            <div className='p-12'>
                <h2 className='font-bold text-6xl text-white'>Baseado em experiência</h2>

                <h2 className='mt-8 text-2xl text-white'>Assista o vídeo</h2>
            </div>

            <div className='bg-stone-800 h-56 w-3/6 p-5'>

                <h2 className='text-white text-2xl'>Experiência</h2>

                <div className='flex'>
                    <h2 className='text-white text-2xl'>5+</h2>
                    <h2 className='text-white text-2xl'>Anos de experiência</h2>
                </div>

            </div>


        </div>

    </div>
  )
}

export default Experience