import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

function Socials() {
  return (
    <div className="flex flex-col">
      <span className="lg:text-4xl text-4xl my-3 italic">My Socials:</span>
      <ul className="flex flex-col lg:space-y-2 space-y-1 ">
        <li className="cursor-pointer flex flex-row space-x-1 lg:text-3xl text-xl duration-200 lg:hover:translate-x-5">
          <ArrowRightIcon className="h-10 mx-4" />
          <Link href="https://twitter.com/xenseee" 
          target="_blank">Twitter</Link>
        </li>
        <li className="cursor-pointer flex flex-row space-x-1 lg:text-3xl text-xl duration-200 lg:hover:translate-x-5">
          <ArrowRightIcon className="h-10 mx-4" />
          <Link href="https://linkedin.com/xenseee" 
          target="_blank">Linkedin</Link>
        </li>
        <li className="cursor-pointer flex flex-row space-x-1 lg:text-3xl text-xl duration-200 lg:hover:translate-x-5">
          <ArrowRightIcon className="h-10 mx-4" />
          <Link href="https://github.com/xenseee" 
          target="_blank">Github</Link>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
