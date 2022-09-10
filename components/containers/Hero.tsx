import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../layouts/Navbar";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="flex lg:flex-row flex-col items-center justify-center space-y-6 space-x-4 mt-28 lg:mt-36">
        <div className="mt-10">
          <Image
            src="/assets/images/xense.jpg"
            alt="xense"
            width={200}
            height={200}
            className="rounded-full space-y-2 border-spacing-4 border-gray-200 border-4"
          />
        </div>
        <div className="flex lg:flex-col flex-col space-y-3 justify-center items-center ">
          <div className="space-x-2 font-semibold text-xl lg:text-4xl">
            <span className="lg:ml-4">Hey! I am</span>
            <span className="text-blue-500">
              <Link href="/">xense...</Link>
            </span>
          </div>
          <div>
            I am curently pursuing my bachelors degree (B.Tech CSE) <br />
            I am currently learning native development
            <br />I also write
            <span className="underline mx-2">
              <Link href="/blogs">Technical Blogs...</Link>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default Hero;
