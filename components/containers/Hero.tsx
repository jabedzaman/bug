import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex lg:flex-row flex-col items-center justify-center  lg:mx-20 space-y-6 space-x-3">
        <div  
        className="mt-10"
        >
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
              <Link href="/">Jabed...</Link>
            </span>
          </div>
          <div>
            18 y.o. student learning web dev and <br />
            excelling his coding skillss.... <br />I also write
            <span className="underline mx-1">
              <Link href="/blogs">Blogs</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <Link href="#skills">
          <div className="transition-transform duration-150 ease-out animate-bounce cursor-pointer">
            <Image
              src="/assets/images/down.png"
              alt="down"
              height={50}
              width={50}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
