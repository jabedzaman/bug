import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  InformationCircleIcon,
  RssIcon,
  MailOpenIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className="flex justify-center lg:py-8 py-4 text-white">
      <div className="space-x-2 flex">
        <div title="Home">
          <Link href="/">
            <HomeIcon className="lg:h-10 h-8 hover: duration-200" />
          </Link>
        </div>
        <div title="About">
          <Link href="/about">
            <InformationCircleIcon className="lg:h-10 h-8 hover:rotate-12 duration-200" />
          </Link>
        </div>
        <div title="Blogs">
          <Link href="/blogs">
            <RssIcon className="lg:h-10 h-8 hover:rotate-12 duration-200" />
          </Link>
        </div>
        <div title="services">
          <Link href="/services">
            <BriefcaseIcon className="lg:h-10 h-8 hover:rotate-12 duration-200" />
          </Link>
        </div>
        <div title="contact">
          <Link href="/contact">
            <MailOpenIcon className="lg:h-10 h-8 hover:rotate-12 duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
