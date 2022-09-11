import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/containers/Hero";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="p-4 lg:px-48 text-white justify-between">
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
