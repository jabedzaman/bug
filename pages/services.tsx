import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="p-4 lg:px-48 text-white">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
      <div className="flex flex-col p-4">
        <div className="font-mono m-10">to be updated soon</div>
      </div>
    </div>
  );
};

export default Home;
