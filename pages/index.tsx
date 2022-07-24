import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/containers/Contact'
import Hero from '../components/containers/Hero'
import Skills from '../components/containers/Skills'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-48 xl:px-72 text-white justify-between">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <Skills/>
      <Contact/>
      {/* <Header/> */}
      <Footer/>

    </div>
  )
}

export default Home
