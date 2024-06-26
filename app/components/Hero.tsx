import { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [state, setState] = useState(false)

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: 'Home', path: 'Card' },
    { title: 'Category', path: 'Banner' },
    { title: 'Blog', path: 'Banner' },
    { title: 'About Us', path: 'Banner' }
  ]

  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      const target = e.target as Element
      if (target && target.closest('.menu-btn')) setState(false)
    }
  }, [])

  const Brand = () => (
    <div className='flex items-center justify-between py-5 md:block'>
      <Link href='/components/Tab/Card'>
        <h1 className='my-6 text-2xl italic font-bold tracking-wider text-gray-800'>
          TrekTopia
        </h1>
      </Link>
      <div className='md:hidden'>
        <button
          className='menu-btn text-gray-500 hover:text-gray-800'
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <div className='relative'>
      <div className='relative'>
        <header>
          <div className={`md:hidden ${state ? 'mx-2 pb-5' : 'hidden'}`}>
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? 'absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent'
                : ''
            }`}
          >
            <div className='gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8'>
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? 'block' : 'hidden'
                } `}
              >
                <ul className='flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className='text-gray-700 hover:text-gray-900'
                      >
                        <Link href={item.path} className='block'>
                          {item.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className='items-center justify-end mt-6 space-y-6 md:flex md:mt-0'>
                  <a
                    href='javascript:void(0)'
                    className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-xl md:inline-flex'
                  >
                    Sign in
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className='max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex'>
            <div className='flex-none space-y-5 max-w-xl'>
              <h1 className='text-4xl text-gray-800 font-extrabold sm:text-5xl pt-4'>
                Explore Beautiful
                <br /> Worlds{' '}
              </h1>
              <p>
                Embark on a journey to explore the breathtaking beauty of our
                world, from serene landscapes to vibrant cultures, and discover
                the wonders that await you at every turn.
              </p>
              <div className='flex items-center gap-x-3 sm:text-sm'>
                <a
                  href='javascript:void(0)'
                  className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'
                >
                  Get started
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex'
                >
                  Contact sales
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='flex-1 hidden md:block'>
              {/* Replace with your image */}
              <img
                src='https://images.unsplash.com/photo-1542053117186-b0e0c92c474b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRyYXZlbGVyJTIwTGFkeXxlbnwwfHwwfHx8MA%3D%3D'
                className='max-w-xl rounded-xl'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
