import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div>
        this is dope
      </div>

      <Footer/>

    </div>
  )
}

export default Home
