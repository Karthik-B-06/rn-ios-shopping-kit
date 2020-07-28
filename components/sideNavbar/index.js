import classnames from 'classnames';
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router'

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* <!-- Off-canvas menu for mobile --> */}
      <div className={classnames(['md:', { 'hidden': !open, 'block': open }])}>
        <div className="fixed inset-0 flex z-40">
          {/* <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.
  
          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        --> */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div style={{ marginRight: "-3.5rem" }} className="absolute top-0 right-0 p-1">
              <button onClick={() => setOpen(!open)} className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                <svg className="h-6 w-6 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <a href='https://timeless.co/' className="flex-shrink-0 flex items-center px-4 hover:bg-gray-100">
                <img className="h-8 w-auto" src="https://avatars1.githubusercontent.com/u/4126967?s=200&v=4" alt="Workflow" />
                <h6 className="pl-2">Timeless Co.</h6>
              </a>
              <nav className="mt-5 px-2">
                <Link href='/ios'>
                  <a className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                    <svg className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                      iOS
                  </a>
                </Link>
                <Link href='/android'>
                  <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                    <svg className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                      Android
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="https://github.com/Karthik-B-06" className="flex-shrink-0 group block focus:outline-none focus:bg-gray-300">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-10 w-10 rounded-full" src="https://avatars2.githubusercontent.com/u/35562287?s=400&u=485e1dd30dcbba570c75251c39e047ac6b6329cc&v=4" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900">
                      Karthik
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
            {/* <!-- Force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className={classnames(["hidden md:flex md:flex-shrink-0"])}>
        <div className="flex flex-col w-64">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <a href='https://timeless.co/' className="flex-shrink-0 flex items-center px-2 rounded-lg mx-2 py-2 hover:bg-gray-400">
                <img className="h-6 w-auto" src="https://avatars1.githubusercontent.com/u/4126967?s=200&v=4" alt="Workflow" />
                <h6 className="pl-2">Timeless Co.</h6>
              </a>
              <nav className="mt-5 flex-1 px-2 bg-white">
                <Link href='/ios'>
                  <a className={classnames(["group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150", { 'bg-gray-200': router.pathname === '/ios' }])}>
                    <svg className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                      iOS
                  </a>
                </Link>
                <Link href='/android'>
                  <a href="#" className={classnames(["mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150", { 'bg-gray-200': router.pathname === '/android' }])}>
                    <svg className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                      Android
                    </a>
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-2 m-2 rounded-md hover:bg-gray-300">
              <a href="https://github.com/Karthik-B-06" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-8 w-8 rounded-full" src="https://avatars2.githubusercontent.com/u/35562287?s=400&u=485e1dd30dcbba570c75251c39e047ac6b6329cc&v=4" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                      Karthik
                  </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className={classnames([{ "md:hidden": !open }, { "md:block": open }, "pl-1 pt-1 sm:pl-3 sm:pt-3"])}>
          <button onClick={() => setOpen(!open)} className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" aria-label="Open sidebar">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
          <div className="pt-2 pb-6 md:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* <!-- Replace with your content --> */}
              {props?.component}
              {/* <!-- /End replace --> */}
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}

export default Navbar;