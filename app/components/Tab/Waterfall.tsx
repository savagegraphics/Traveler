const Waterfall = () => {
  const posts = [
    {
      Location: 'Blue Ridge Mountains, North Carolina, USA',
      desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorLogo: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      HouseName: 'Cascade Falls Hideaway',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)'
    },
    {
      Location: 'Columbia River Gorge, Oregon, USA',
      desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorLogo: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      HouseName: 'Misty Falls Cottage',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)'
    },
    {
      Location: 'Yosemite National Park, California, USA',
      desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some',
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      authorLogo: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      HouseName: 'Waterfall Vista Retreat',
      date: 'Jan 4 2022',
      href: 'javascript:void(0)'
    }
  ]

  return (
    <section className='mt-12 mx-auto px-4 max-w-screen-xl md:px-8'>
      <div className='text-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>
          Waterfall Retreats
        </h1>
        <p className='mt-3 text-gray-500'>
          Experience the tranquility of nature at these serene waterfall
          getaways.{' '}
        </p>
      </div>
      <div className='mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map((items, key) => (
          <article
            className='max-w-xl mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm'
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading='lazy'
                alt={items.date}
                className='w-[400px] lg:w-[350px] h-48 rounded-lg m-2'
              />
              <div className='flex justify-between items-center mt-2 pt-3 mx-4'>
                <div className='flex-start mr-3'>
                  <span className='block text-gray-900 font-semibold'>
                    {items.HouseName}
                  </span>
                </div>
                <div className='flex-end ml-3'>
                  <span className='block text-gray-400 text-sm'>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500'
                      >
                        <svg
                          className='flex-shrink-0 size-5'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500'
                      >
                        <svg
                          className='flex-shrink-0 size-5'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500'
                      >
                        <svg
                          className='flex-shrink-0 size-5'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500'
                      >
                        <svg
                          className='flex-shrink-0 size-5'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='size-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 dark:hover:text-yellow-500'
                      >
                        <svg
                          className='flex-shrink-0 size-5'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                      </button>
                    </div>
                  </span>
                </div>
              </div>

              <div className='pt-3 ml-4 mr-2 mb-3'>
                <p className='text-sm text-gray-900 flex'>
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
                      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                  {items.Location}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Waterfall
