import { content } from "../Content";
import { useState } from "react";

const Hero = () => {
  const { hero } = content;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="relative">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8 transition-all ease-in-out duration-300" aria-label="Global">
            <div className="flex lg:flex-1">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a> */}
            </div>
            {/* <div className="hidden lg:flex lg:gap-x-12 transition-all ease-in-out duration-300">
              <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600">Product</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600">Features</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600">Marketplace</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600">Company</a>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div> */}
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl text-black animate__animated animate__fadeIn animate__delay-1s">
                Carbo
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 animate__animated animate__fadeIn animate__delay-1.5s">
                Computer Science student, passionate about software development and cybersecurity
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://github.com/C4rbo" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition duration-300 hover:scale-105">
                  See my repository
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
