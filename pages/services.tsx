import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-48 xl:px-72 text-white justify-between">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <div className="font-mono m-10">to be updated soon</div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
