/* eslint-disable @next/next/no-img-element */
import HomeIcon from "@heroicons/react/outline/HomeIcon"
import Link from "next/link";
function classNames() {
  return;
}

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/">
          <HomeIcon className="h-10 w-10 text-black"/>
          </Link>
        </div>
        <hr className="text-gray-50" />
      </div>
    </div>
  );
}
