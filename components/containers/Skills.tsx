import React from 'react'

function Skills() {
  return (
    <div className='flex flex-col space-y-10 items-center'>
        <div className='font-semibold text-xl lg:text-4xl'>My Skills:</div>
        <div>
            <ul className='flex flex-row'>
              <li>
                <img src="/assets/images/icons8-html-5.svg" alt="html5" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-css3.svg" alt="css3" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-javascript.svg" alt="javascript" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-typescript.svg" alt="typescript" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
            </ul>
            <ul className='flex flex-row'>
              <li>
                <img src="/assets/images/icons8-react.svg" alt="react" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-tailwindcss.svg" alt="css3" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-google-firebase-console.svg" alt="firebase" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-visual-studio-code-2019.svg" alt="vscode" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
            </ul>
            <ul className='flex flex-row'>
              <li>
                <img src="/assets/images/icons8-git.svg" alt="git" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-github.svg" alt="github" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-nodejs.svg" alt="node" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
              <li>
                <img src="/assets/images/icons8-linux-48.png" alt="linux" className='transition-transform duration-150 ease-out hover:scale-110 mx-1 my-1 lg:mx-5 lg:my-5' />
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Skills