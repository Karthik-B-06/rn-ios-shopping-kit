import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* <!-- Off-canvas menu for mobile --> */}
      <div className={classnames(["md:", { hidden: !open, block: open }])}>
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
            <div
              style={{ marginRight: "-3.5rem" }}
              className="absolute top-0 right-0 p-1"
            >
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
              >
                <svg
                  className="h-6 w-6 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <a
                href="https://timeless.co/"
                className="flex-shrink-0 flex items-center px-4 hover:bg-gray-100"
              >
                <img
                  className="h-8 w-auto"
                  src="https://avatars1.githubusercontent.com/u/4126967?s=200&v=4"
                  alt="Workflow"
                />
                <h6 className="pl-2">Timeless Co.</h6>
              </a>
              <div
                onClick={() =>
                  props?.theme === "LIGHT"
                    ? props?.setTheme("DARK")
                    : props?.setTheme("LIGHT")
                }
                className="flex mx-2 px-2 py-4 my-2 hover:bg-gray-300 rounded-md cursor-pointer"
              >
                <div className="flex flex-row">
                  <div
                    className={classnames([
                      {
                        hidden: props?.theme === "LIGHT",
                        block: props?.theme === "DARK",
                      },
                      "transition ease-in-out duration-500",
                    ])}
                  >
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 512 512"
                      height="24"
                      viewBox="0 0 512 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m123.467 31.566h9.066v9.067c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.067h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.066v-9.066c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-9.066c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z" />
                        <path d="m388.533 480.434h-9.066v-9.067c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.067h-9.067c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h9.066v9.066c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.066h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.356-7.5-7.499-7.5z" />
                        <path d="m139.25 305.7c0-13.271-10.796-24.066-24.066-24.066s-24.068 10.796-24.068 24.066 10.797 24.066 24.067 24.066 24.067-10.795 24.067-24.066zm-24.066 9.067c-5 0-9.067-4.067-9.067-9.066s4.067-9.066 9.067-9.066c4.999 0 9.066 4.067 9.066 9.066s-4.067 9.066-9.066 9.066z" />
                        <path d="m131.75 263.5c13.27 0 24.066-10.796 24.066-24.066s-10.796-24.067-24.066-24.067-24.066 10.797-24.066 24.067 10.795 24.066 24.066 24.066zm0-33.134c4.999 0 9.066 4.067 9.066 9.067 0 4.999-4.067 9.066-9.066 9.066s-9.066-4.067-9.066-9.066 4.067-9.067 9.066-9.067z" />
                        <path d="m462.3 255.666c-.011-6.411-4.423-11.787-10.729-13.074-6.296-1.279-12.45 1.93-14.968 7.814-21.044 49.196-69.145 80.929-122.624 80.929-.117 0-.242-.001-.359-.001-73.116-.195-132.759-59.838-132.953-132.953-.143-53.619 31.623-101.894 80.929-122.983 5.884-2.518 9.097-8.672 7.812-14.968-1.287-6.306-6.663-10.718-13.087-10.729h-.321c-49.345 0-97.096 17.697-134.458 49.832-3.141 2.701-3.496 7.437-.796 10.577 2.702 3.142 7.437 3.495 10.577.796 32.781-28.195 74.191-44.403 117.316-46.063-50.804 24.916-83.125 76.527-82.973 133.577.217 81.343 66.569 147.696 147.913 147.914.134 0 .266.001.4.001 56.893-.002 108.324-32.289 133.18-82.979-3.882 102.084-88.141 183.944-191.159 183.944-8.348 0-16.77-.549-25.034-1.632-.476-.062-.641-.589-.663-.892-.071-.97-.205-1.953-.397-2.922-2.131-10.735-11.224-18.696-22.113-19.359-8.759-.518-17.137 3.747-21.829 11.172-.079.126-.434.221-.782.082-19.635-7.83-37.752-18.818-53.85-32.661-3.139-2.701-7.875-2.346-10.576.797-2.701 3.141-2.344 7.876.797 10.576 17.356 14.926 36.895 26.776 58.071 35.221 7.049 2.812 15.046.287 19.021-6.003 1.768-2.799 4.926-4.42 8.236-4.211 4.024.245 7.52 3.318 8.311 7.308.073.371.125.742.151 1.102.562 7.652 6.185 13.683 13.673 14.664 8.908 1.167 17.986 1.759 26.983 1.759 113.754 0 206.3-92.546 206.3-206.3v-.335z" />
                        <path d="m64.7 256c0-45.757 16.409-90.035 46.205-124.677 2.7-3.141 2.345-7.876-.796-10.577-3.14-2.7-7.875-2.346-10.577.796-32.135 37.362-49.832 85.113-49.832 134.458 0 49.343 17.699 97.092 49.837 134.451 1.483 1.724 3.58 2.608 5.688 2.608 1.732 0 3.473-.597 4.889-1.815 3.14-2.701 3.495-7.436.794-10.577-29.798-34.637-46.208-78.912-46.208-124.667z" />
                        <path d="m463.083 381.033c-4.143 0-7.5 3.357-7.5 7.5v16.567c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.501-7.5-7.501z" />
                        <path d="m463.083 447.3c-4.143 0-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5z" />
                        <path d="m504.5 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                        <path d="m438.233 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                        <path d="m48.917 64.7c4.143 0 7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5z" />
                        <path d="m56.417 123.467v-16.567c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.499z" />
                        <path d="m73.767 89.55h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-16.566c-4.143 0-7.5 3.357-7.5 7.5 0 4.142 3.357 7.5 7.5 7.5z" />
                        <path d="m24.066 74.55h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    className={classnames([
                      {
                        block: props?.theme === "LIGHT",
                        hidden: props?.theme === "DARK",
                      },
                      "transition ease-in-out duration-500",
                    ])}
                  >
                    <svg
                      height="24"
                      viewBox="0 0 128 128"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <circle cx="64" cy="63.997" fill="#fedb41" r="39.247" />
                        <g fill="#fea832">
                          <path d="m95.247 65.747a1.749 1.749 0 0 1 -1.747-1.747 29.53 29.53 0 0 0 -29.5-29.5 1.75 1.75 0 0 1 0-3.5 33.035 33.035 0 0 1 33 33 1.749 1.749 0 0 1 -1.753 1.747z" />
                          <g>
                            <path d="m64 16.75a47.252 47.252 0 0 1 8.5.781c.038-.545.063-1.1.063-1.658-.001-7.801-8.563-14.126-8.563-14.126s-8.563 6.325-8.563 14.126c0 .562.026 1.113.064 1.658a47.243 47.243 0 0 1 8.499-.781z" />
                            <path d="m64 111.244a47.343 47.343 0 0 0 8.5-.78c.038.544.063 1.095.063 1.657 0 7.8-8.562 14.126-8.562 14.126s-8.563-6.324-8.563-14.126c0-.562.026-1.113.064-1.657a47.335 47.335 0 0 0 8.498.78z" />
                            <path d="m97.409 30.588a47.349 47.349 0 0 1 5.457 6.562c.413-.358.82-.73 1.217-1.127 5.517-5.517 3.934-16.043 3.934-16.043s-10.526-1.58-16.043 3.934c-.4.4-.769.8-1.127 1.217a47.349 47.349 0 0 1 6.562 5.457z" />
                            <path d="m30.591 97.406a47.232 47.232 0 0 0 6.562 5.457c-.358.413-.73.82-1.127 1.217-5.517 5.517-16.043 3.934-16.043 3.934s-1.583-10.526 3.934-16.043c.4-.4.8-.769 1.217-1.127a47.291 47.291 0 0 0 5.457 6.562z" />
                            <path d="m111.247 64a47.335 47.335 0 0 1 -.78 8.5c.544.038 1.095.064 1.657.064 7.8 0 14.126-8.563 14.126-8.563s-6.325-8.562-14.126-8.562c-.562 0-1.113.025-1.657.063a47.343 47.343 0 0 1 .78 8.498z" />
                            <path d="m16.753 64a47.335 47.335 0 0 0 .78 8.5c-.544.038-1.1.064-1.657.064-7.801-.004-14.126-8.564-14.126-8.564s6.325-8.562 14.126-8.562c.562 0 1.113.025 1.657.063a47.343 47.343 0 0 0 -.78 8.499z" />
                            <path d="m97.409 97.406a47.349 47.349 0 0 1 -6.562 5.457c.358.413.73.82 1.127 1.217 5.517 5.517 16.043 3.934 16.043 3.934s1.583-10.526-3.934-16.043c-.4-.4-.8-.769-1.217-1.127a47.291 47.291 0 0 1 -5.457 6.562z" />
                            <path d="m30.591 30.588a47.349 47.349 0 0 0 -5.457 6.562c-.413-.358-.82-.73-1.217-1.127-5.517-5.517-3.934-16.043-3.934-16.043s10.526-1.58 16.043 3.934c.4.4.769.8 1.127 1.217a47.291 47.291 0 0 0 -6.562 5.457z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="pl-2 text-gray-700 font-medium">
                    Toggle Screen Theme
                  </h3>
                </div>
              </div>
              <nav className="mt-2 px-2">
                <Link href="/ios">
                  <a className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                    <svg
                      className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    iOS
                  </a>
                </Link>
                <Link href="/android">
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Android
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a
                href="https://github.com/Karthik-B-06"
                className="flex-shrink-0 group block focus:outline-none focus:bg-gray-300"
              >
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://avatars2.githubusercontent.com/u/35562287?s=400&u=485e1dd30dcbba570c75251c39e047ac6b6329cc&v=4"
                      alt=""
                    />
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
      <div className={classnames(["hidden md:flex md:flex-shrink-0 "])}>
        <div className="flex flex-col w-64 ">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <a
                href="https://timeless.co/"
                className="flex-shrink-0 flex items-center px-2 rounded-lg mx-2 py-2 hover:bg-gray-400"
              >
                <img
                  className="h-6 w-auto"
                  src="https://avatars1.githubusercontent.com/u/4126967?s=200&v=4"
                  alt="Workflow"
                />
                <h6 className="pl-2">Timeless Co.</h6>
              </a>
              <div
                onClick={() =>
                  props?.theme === "LIGHT"
                    ? props?.setTheme("DARK")
                    : props?.setTheme("LIGHT")
                }
                className="flex mx-2 px-2 py-2 hover:bg-gray-300 rounded-md cursor-pointer"
              >
                <div className="flex flex-row">
                  <div
                    className={classnames([
                      {
                        hidden: props?.theme === "LIGHT",
                        block: props?.theme === "DARK",
                      },
                      "transition ease-in-out duration-500",
                    ])}
                  >
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 512 512"
                      height="24"
                      viewBox="0 0 512 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m123.467 31.566h9.066v9.067c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.067h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.066v-9.066c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-9.066c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z" />
                        <path d="m388.533 480.434h-9.066v-9.067c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.067h-9.067c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h9.066v9.066c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.066h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.356-7.5-7.499-7.5z" />
                        <path d="m139.25 305.7c0-13.271-10.796-24.066-24.066-24.066s-24.068 10.796-24.068 24.066 10.797 24.066 24.067 24.066 24.067-10.795 24.067-24.066zm-24.066 9.067c-5 0-9.067-4.067-9.067-9.066s4.067-9.066 9.067-9.066c4.999 0 9.066 4.067 9.066 9.066s-4.067 9.066-9.066 9.066z" />
                        <path d="m131.75 263.5c13.27 0 24.066-10.796 24.066-24.066s-10.796-24.067-24.066-24.067-24.066 10.797-24.066 24.067 10.795 24.066 24.066 24.066zm0-33.134c4.999 0 9.066 4.067 9.066 9.067 0 4.999-4.067 9.066-9.066 9.066s-9.066-4.067-9.066-9.066 4.067-9.067 9.066-9.067z" />
                        <path d="m462.3 255.666c-.011-6.411-4.423-11.787-10.729-13.074-6.296-1.279-12.45 1.93-14.968 7.814-21.044 49.196-69.145 80.929-122.624 80.929-.117 0-.242-.001-.359-.001-73.116-.195-132.759-59.838-132.953-132.953-.143-53.619 31.623-101.894 80.929-122.983 5.884-2.518 9.097-8.672 7.812-14.968-1.287-6.306-6.663-10.718-13.087-10.729h-.321c-49.345 0-97.096 17.697-134.458 49.832-3.141 2.701-3.496 7.437-.796 10.577 2.702 3.142 7.437 3.495 10.577.796 32.781-28.195 74.191-44.403 117.316-46.063-50.804 24.916-83.125 76.527-82.973 133.577.217 81.343 66.569 147.696 147.913 147.914.134 0 .266.001.4.001 56.893-.002 108.324-32.289 133.18-82.979-3.882 102.084-88.141 183.944-191.159 183.944-8.348 0-16.77-.549-25.034-1.632-.476-.062-.641-.589-.663-.892-.071-.97-.205-1.953-.397-2.922-2.131-10.735-11.224-18.696-22.113-19.359-8.759-.518-17.137 3.747-21.829 11.172-.079.126-.434.221-.782.082-19.635-7.83-37.752-18.818-53.85-32.661-3.139-2.701-7.875-2.346-10.576.797-2.701 3.141-2.344 7.876.797 10.576 17.356 14.926 36.895 26.776 58.071 35.221 7.049 2.812 15.046.287 19.021-6.003 1.768-2.799 4.926-4.42 8.236-4.211 4.024.245 7.52 3.318 8.311 7.308.073.371.125.742.151 1.102.562 7.652 6.185 13.683 13.673 14.664 8.908 1.167 17.986 1.759 26.983 1.759 113.754 0 206.3-92.546 206.3-206.3v-.335z" />
                        <path d="m64.7 256c0-45.757 16.409-90.035 46.205-124.677 2.7-3.141 2.345-7.876-.796-10.577-3.14-2.7-7.875-2.346-10.577.796-32.135 37.362-49.832 85.113-49.832 134.458 0 49.343 17.699 97.092 49.837 134.451 1.483 1.724 3.58 2.608 5.688 2.608 1.732 0 3.473-.597 4.889-1.815 3.14-2.701 3.495-7.436.794-10.577-29.798-34.637-46.208-78.912-46.208-124.667z" />
                        <path d="m463.083 381.033c-4.143 0-7.5 3.357-7.5 7.5v16.567c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.501-7.5-7.501z" />
                        <path d="m463.083 447.3c-4.143 0-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5z" />
                        <path d="m504.5 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                        <path d="m438.233 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                        <path d="m48.917 64.7c4.143 0 7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5z" />
                        <path d="m56.417 123.467v-16.567c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.499z" />
                        <path d="m73.767 89.55h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-16.566c-4.143 0-7.5 3.357-7.5 7.5 0 4.142 3.357 7.5 7.5 7.5z" />
                        <path d="m24.066 74.55h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    className={classnames([
                      {
                        block: props?.theme === "LIGHT",
                        hidden: props?.theme === "DARK",
                      },
                      "transition ease-in-out duration-500",
                    ])}
                  >
                    <svg
                      height="24"
                      viewBox="0 0 128 128"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <circle cx="64" cy="63.997" fill="#fedb41" r="39.247" />
                        <g fill="#fea832">
                          <path d="m95.247 65.747a1.749 1.749 0 0 1 -1.747-1.747 29.53 29.53 0 0 0 -29.5-29.5 1.75 1.75 0 0 1 0-3.5 33.035 33.035 0 0 1 33 33 1.749 1.749 0 0 1 -1.753 1.747z" />
                          <g>
                            <path d="m64 16.75a47.252 47.252 0 0 1 8.5.781c.038-.545.063-1.1.063-1.658-.001-7.801-8.563-14.126-8.563-14.126s-8.563 6.325-8.563 14.126c0 .562.026 1.113.064 1.658a47.243 47.243 0 0 1 8.499-.781z" />
                            <path d="m64 111.244a47.343 47.343 0 0 0 8.5-.78c.038.544.063 1.095.063 1.657 0 7.8-8.562 14.126-8.562 14.126s-8.563-6.324-8.563-14.126c0-.562.026-1.113.064-1.657a47.335 47.335 0 0 0 8.498.78z" />
                            <path d="m97.409 30.588a47.349 47.349 0 0 1 5.457 6.562c.413-.358.82-.73 1.217-1.127 5.517-5.517 3.934-16.043 3.934-16.043s-10.526-1.58-16.043 3.934c-.4.4-.769.8-1.127 1.217a47.349 47.349 0 0 1 6.562 5.457z" />
                            <path d="m30.591 97.406a47.232 47.232 0 0 0 6.562 5.457c-.358.413-.73.82-1.127 1.217-5.517 5.517-16.043 3.934-16.043 3.934s-1.583-10.526 3.934-16.043c.4-.4.8-.769 1.217-1.127a47.291 47.291 0 0 0 5.457 6.562z" />
                            <path d="m111.247 64a47.335 47.335 0 0 1 -.78 8.5c.544.038 1.095.064 1.657.064 7.8 0 14.126-8.563 14.126-8.563s-6.325-8.562-14.126-8.562c-.562 0-1.113.025-1.657.063a47.343 47.343 0 0 1 .78 8.498z" />
                            <path d="m16.753 64a47.335 47.335 0 0 0 .78 8.5c-.544.038-1.1.064-1.657.064-7.801-.004-14.126-8.564-14.126-8.564s6.325-8.562 14.126-8.562c.562 0 1.113.025 1.657.063a47.343 47.343 0 0 0 -.78 8.499z" />
                            <path d="m97.409 97.406a47.349 47.349 0 0 1 -6.562 5.457c.358.413.73.82 1.127 1.217 5.517 5.517 16.043 3.934 16.043 3.934s1.583-10.526-3.934-16.043c-.4-.4-.8-.769-1.217-1.127a47.291 47.291 0 0 1 -5.457 6.562z" />
                            <path d="m30.591 30.588a47.349 47.349 0 0 0 -5.457 6.562c-.413-.358-.82-.73-1.217-1.127-5.517-5.517-3.934-16.043-3.934-16.043s10.526-1.58 16.043 3.934c.4.4.769.8 1.127 1.217a47.291 47.291 0 0 0 -6.562 5.457z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="pl-2 text-gray-700 font-medium">
                    Toggle Screen Theme
                  </h3>
                </div>
              </div>
              <nav className="mt-3 flex-1 px-2">
                <Link href="/ios">
                  <a
                    className={classnames([
                      "group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150",
                      { "bg-gray-200": router.pathname === "/ios" },
                    ])}
                  >
                    <svg
                      className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    iOS
                  </a>
                </Link>
                <Link href="/android">
                  <a
                    href="#"
                    className={classnames([
                      "mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150",
                      { "bg-gray-200": router.pathname === "/android" },
                    ])}
                  >
                    <svg
                      className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Android
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-2 m-2 rounded-md hover:bg-gray-300">
              <a
                href="https://github.com/Karthik-B-06"
                className="flex-shrink-0 w-full group block"
              >
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-8 w-8 rounded-full"
                      src="https://avatars2.githubusercontent.com/u/35562287?s=400&u=485e1dd30dcbba570c75251c39e047ac6b6329cc&v=4"
                      alt=""
                    />
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
        <div
          className={classnames([
            { "md:hidden": !open },
            { "md:block": open },
            "pl-1 pt-1 sm:pl-3 sm:pt-3",
          ])}
        >
          <button
            onClick={() => setOpen(!open)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
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
  );
};

export default Navbar;
