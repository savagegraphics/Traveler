import React from 'react'

type Props = {}

const Gallery = (props: Props) => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700'>
          <div className='flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto'>
            <svg
              className='flex-shrink-0 size-7 text-white'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
              <circle cx='9' cy='7' r='4' />
              <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
              <path d='M16 3.13a4 4 0 0 1 0 7.75' />
            </svg>
          </div>

          <div className='mt-3'>
            <h3 className='text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200'>
              Designing for people
            </h3>
          </div>
        </div>

        <div className='h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700'>
          <div className='flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto'>
            <svg
              className='flex-shrink-0 size-7 text-white'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M7 10v12' />
              <path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z' />
            </svg>
          </div>

          <div className='mt-3'>
            <h3 className='text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200'>
              Simple and affordable
            </h3>
          </div>
        </div>

        <div className='h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700'>
          <div className='flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto'>
            <svg
              className='flex-shrink-0 size-7 text-white'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M2 3h20' />
              <path d='M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3' />
              <path d='m7 21 5-5 5 5' />
            </svg>
          </div>

          <div className='mt-3'>
            <h3 className='text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200'>
              Get freelance work
            </h3>
          </div>
        </div>

        <div className='h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700'>
          <div className='flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto'>
            <svg
              className='flex-shrink-0 size-7 text-white'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7' />
              <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
              <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4' />
              <path d='M2 7h20' />
              <path d='M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7' />
            </svg>
          </div>
          <div className='mt-3'>
            <h3 className='text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200'>
              Sell your goods
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
