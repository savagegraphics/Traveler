import * as Tabs from '@radix-ui/react-tabs'
import { SetStateAction, useState } from 'react'

// Import the components for each tab item
import Mountain from './Tab/Mountain'
import Waterfall from './Tab/Waterfall'
import Exotic from './Tab/Exotic'
import Lakefront from './Tab/Lakefront'
import Treehouse from './Tab/Treehouse'

type TabContentComponents = {
  Mountain: JSX.Element
  Waterfall: JSX.Element
  Exotic: JSX.Element
  Lakefront: JSX.Element
  Treehouse: JSX.Element
}

const Card = () => {
  const [selectedTab, setSelectedTab] = useState('Mountain')

  const tabItems = ['Mountain', 'Waterfall', 'Exotic', 'Lakefront', 'Treehouse']

  // Define components for each tab item
  const tabContentComponents: { [key: string]: JSX.Element } = {
    Mountain: <Mountain />,
    Waterfall: <Waterfall />,
    Exotic: <Exotic />,
    Lakefront: <Lakefront />,
    Treehouse: <Treehouse />
  }

  return (
    <Tabs.Root
      className='max-w-screen-xl mt-2 mx-auto px-4 md:px-8'
      value={selectedTab}
      onValueChange={(val: SetStateAction<string>) => setSelectedTab(val)}
    >
      <Tabs.List
        className='hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex'
        aria-label='Manage your account'
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className='data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium'
            value={item}
          >
            {item}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className='relative text-gray-500 sm:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
        <select
          value={selectedTab}
          className='py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-gray-800 text-sm'
          onChange={e => setSelectedTab(e.target.value)}
        >
          {tabItems.map((item, idx) => (
            <option key={idx} idx={idx}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className='py-6' value={item}>
          {tabContentComponents[item]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export default Card
