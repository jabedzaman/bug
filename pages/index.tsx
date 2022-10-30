import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/containers/About";
import Hero from "../components/containers/Hero";
import Navbar from "../components/layouts/Navbar"
import Contact from "../components/containers/Contact";
import Footer from "../components/layouts/Footer";
import Techstack from "../components/containers/Techstack"

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Jabed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <div className="h-screen items-center" id="#">
        <Navbar />
      <Hero />
      </div>
      <div id="about">
      <About/>
      </div>
      <Techstack/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
