import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/containers/Hero";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 py-4 lg:px-48 xl:px-72 text-white justify-between">
      <Head>
        <title>xense | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero />
    </div>
  );
};

export default Home;
