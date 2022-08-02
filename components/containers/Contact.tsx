import React from "react";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <div className="flex items-center justify-center my-10 lg:my-20 flex-col space-y-10">
        <span className="font-semibold text-xl lg:text-4xl">Get in touch:</span>
        <span className="flex flex-row">
          <Link href="https://instagram.com/xenseeee" target="_blank">
            <Image
              src="/assets/images/icons8-instagram.svg"
              width={50}
              height={50}
              alt="instagram"
              className="cursor-pointer mx-1 lg:mx-2 transition-transform duration-150 ease-out hover:scale-125 "
            />
          </Link>
          <Link href="https://twitter.com/xenseee" target="_blank">
            <Image
              src="/assets/images/icons8-twitter.svg"
              width={50}
              height={50}
              alt="twitter"
              className="cursor-pointer mx-1 lg:mx-2 transition-transform duration-150 ease-out hover:scale-125 "
            />
          </Link>
          <Link href="https://github.com/thexense" target="_blank">
            <Image
              src="/assets/images/icons8-github.svg"
              width={50}
              height={50}
              alt="github"
              className="cursor-pointer mx-1 lg:mx-2 transition-transform duration-150 ease-out hover:scale-125 "
            />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Contact;
