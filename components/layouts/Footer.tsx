import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <div className="flex flex-col justify-center items-center my-10">
        <div className="space-x-1">
          <span className="text-gray-300">©️ Copyright by</span>
          <span className="text-gray-300">
            <Link href="/">xense</Link>
          </span>
        </div>
        <div>
          {/* socials */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
