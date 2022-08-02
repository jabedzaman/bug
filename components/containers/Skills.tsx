import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col space-y-10 items-center">
      <div className="font-semibold text-xl lg:text-4xl">My Skills:</div>
      <div>
        <ul className="flex flex-row">
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-html-5.svg"
                alt="html5"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-css3.svg"
                alt="css3"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-javascript.svg"
                alt="javascript"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-typescript.svg"
                alt="typescript"
                className=""
              />
            </div>
          </li>
        </ul>
        <ul className="flex flex-row">
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-react.svg"
                alt="react"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-tailwindcss.svg"
                alt="css3"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-google-firebase-console.svg"
                alt="f
                irebase"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-visual-studio-code-2019.svg"
                alt="vscode"
                className=""
              />
            </div>
          </li>
        </ul>
        <ul className="flex flex-row">
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-git.svg"
                alt="git"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-github.svg"
                alt="github"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-nodejs.svg"
                alt="node"
                className=""
              />
            </div>
          </li>
          <li className="m-2 cursor-pointer ">
            <div className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5'>
              <Image
                width={50}
                height={50}
                src="/assets/images/icons8-linux-48.png"
                alt="linux"
                className=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
