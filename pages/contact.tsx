import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/containers/Form";
import Socials from "../components/containers/Socials";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="p-4 lg:px-48 text-white">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Form/>
      <Socials/>
    </div>
  );
};

export default Home;
