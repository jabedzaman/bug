/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          My Tech Stack
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/assets/images/icons8-html-5.svg"
              alt="Html"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/assets/images/icons8-css3.svg"
              alt="css3"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/assets/images/icons8-javascript.svg"
              alt="javascript"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/assets/images/icons8-react.svg"
              alt="react"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/assets/images/icons8-git.svg"
              alt="git"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/assets/images/icons8-nodejs.svg"
              alt="nodejs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
