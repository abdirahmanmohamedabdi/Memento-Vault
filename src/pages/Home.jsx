import React from 'react'
import Navbar from '@/components/Navbar'
import { Cta } from '@/components/Cta'
import Faq from '@/components/Footer'
import Features from '@/components/Features'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Cta/>
        <Features/>
        <Faq/>
    </div>
  )
}

export default Home