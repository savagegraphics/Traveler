'use client'
import React from 'react'
import Hero from './components/Hero'
import Card from './components/Card'
import Card2 from './components/Card2'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Home () {
  return (
    <div className=''>
      <Hero />
      <Card />
      <Banner />
      <Card2 />
      <Stats />
      <Content />
      <Footer />
    </div>
  )
}
