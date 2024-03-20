import { Button, ButtonGroup } from '@nextui-org/react'

const Content = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-5 row-gap-10 lg:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              The quick, brown fox
              <br className='hidden md:block' />
              jumps over{' '}
              <span className='relative px-1'>
                <div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400' />
                <span className='relative inline-block text-deep-purple-accent-400'>
                  a lazy dog
                </span>
              </span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <p className='mb-4 text-sm font-bold tracking-widest uppercase'>
            Features
          </p>
          <div className='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0'>
            <ul className='space-y-3'>
              <li className='flex'>
                <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100'>
                  <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                      className='h-9 w-9 text-gray-800'
                    >
                      <polygon points='160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039'></polygon>
                      <path d='M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z'></path>
                      <path d='M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z'></path>
                    </svg>
                  </div>
                  <div className='flex flex-col justify-center align-middle'>
                    <p className='text-3xl font-semibold leadi'>200</p>
                    <p className='capitalize'>Orders</p>
                  </div>
                </div>
              </li>
              <li className='flex'>
                <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100'>
                  <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                      className='h-9 w-9 text-gray-800'
                    >
                      <polygon points='160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039'></polygon>
                      <path d='M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z'></path>
                      <path d='M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z'></path>
                    </svg>
                  </div>
                  <div className='flex flex-col justify-center align-middle'>
                    <p className='text-3xl font-semibold leadi'>200</p>
                    <p className='capitalize'>Orders</p>
                  </div>
                </div>
              </li>
            </ul>
            <ul className='space-y-3'>
              <li className='flex'>
                <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100'>
                  <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                      className='h-9 w-9 text-gray-800'
                    >
                      <polygon points='160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039'></polygon>
                      <path d='M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z'></path>
                      <path d='M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z'></path>
                    </svg>
                  </div>
                  <div className='flex flex-col justify-center align-middle'>
                    <p className='text-3xl font-semibold leadi'>200</p>
                    <p className='capitalize'>Orders</p>
                  </div>
                </div>
              </li>
              <li className='flex'>
                <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100'>
                  <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                      className='h-9 w-9 text-gray-800'
                    >
                      <polygon points='160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039'></polygon>
                      <path d='M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z'></path>
                      <path d='M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z'></path>
                    </svg>
                  </div>
                  <div className='flex flex-col justify-center align-middle'>
                    <p className='text-3xl font-semibold leadi'>200</p>
                    <p className='capitalize'>Orders</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
export default Content
