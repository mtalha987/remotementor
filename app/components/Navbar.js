// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="menu-home border-0 border-b border-solid border-gray-100">
                <header>
                  <nav className="flex lg:justify-center lg:py-3">
                    <div className="flex justify-between items-center w-full lg:w-11/12 lg:px-8 2xl:max-w-6xl">
                      <div className="z-20 p-2">
                        <Link href="/">
                          <img className="p-0.5 h-24 w-24" src="/images/logo.png" alt="MentorCruise Logo Turquoise" />
                        </Link>
                      </div>
                      <div>
                        <button id="iconb" title="Navbar Menu Icon" className="border-0 mr-2 bg-blue-500 opacity-50 lg:hidden">
                          <svg id="menu-closedb" viewBox="0 0 100 80" width={16} height={16}>
                            <rect width={100} height={8} />
                            <rect y={30} width={100} height={8} />
                            <rect y={60} width={100} height={8} />
                          </svg>
                          <svg id="menu-openb" className="hidden" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 80 80" overflow="visible" stroke="black" strokeWidth={4}>
                            <line x2={60} y2={60} />
                            <line x1={60} y2={60} />
                          </svg>
                        </button>
                      </div>
                      <div className="hidden lg:flex items-center space-x-4 py-4" id="desktop-menu">
                        <div id="findamentorb" className="relative">
                          <Link href="/mentor/browse/" className="text-mc-shade-darkest text-sm font-bold pt-2 pb-8 pr-10">
                            <span className="angle-down">Find a Mentor</span>
                          </Link>
                          <div id="findamentor-modalb" className="absolute -left-8 bg-white z-10 w-max flex-col h-auto font-semibold rounded-lg mt-7 pl-4 shadow-lg hidden">
                            <div className="flex space-x-8">
                              <div className="p-4">
                                <div className="text-gray-900 text-lg font-bold mb-2">Tech Mentors</div>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/javascript/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Javascript Mentors</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/python/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Python
                                    Mentors</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/datascience/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Data
                                    Science</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/machinelearning/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Machine
                                    Learning</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/cybersecurity/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Cybersecurity</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/HTML/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Web
                                    Development</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/ai/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    AI
                                    Mentors</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/blockchain/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Blockchain Mentors</p>
                                </a>
                                <div className="text-gray-900 text-lg font-bold mb-2 pt-8">Career
                                  Mentors</div>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/leadership/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Leadership Mentors</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/career/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Career
                                    Growth</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/interview/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Interview Coaches</p>
                                </a>
                                <a className="text-navy-800 hover:text-navy-900" href="/skill/resume/">
                                  <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                    Resume
                                    Coaches</p>
                                </a>
                              </div>
                              <div className="flex flex-col justify-between p-4">
                                <div>
                                  <p className="text-gray-900 text-lg font-bold mb-2">Business Mentors
                                  </p>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/marketing/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Marketing Experts</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="https://mentorcruise.com/mentor/c/mentors-for-founders">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      CEOs
                                      &amp; Founders</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/product%20management/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Product Managers</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/entrepreneurship/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Entrepreneurship</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/startup/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Startup Mentors</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/growth/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Growth Mentors</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/agile/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Agile Mentors</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/saas/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      SaaS
                                      Coaches</p>
                                  </a>
                                </div>
                                <div>
                                  <div className="text-gray-900 text-lg font-bold mb-2 pt-8">Design
                                    Mentors</div>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/ux/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      UX
                                      Design</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/productdesign/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Product Design</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/webdesign/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      Web
                                      Design</p>
                                  </a>
                                  <a className="text-navy-800 hover:text-navy-900" href="/skill/uxresearch/">
                                    <p className="py-1.5 px-3 text-md hover:bg-gray-100 rounded-lg font-medium">
                                      UX
                                      Research</p>
                                  </a>
                                </div>
                              </div>
                              <div className="flex justify-center bg-green-50 p-6 rounded-r-lg">
                                <ul className="space-y-6">
                                  <li className="p-2 text-lg">
                                    <a className="flex items-center text-gray-500 space-x-2" href="/mentor/browse/">
                                      <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                      </svg>
                                      <span>All Mentors</span>
                                    </a>
                                  </li>
                                  <li className="p-2 text-lg">
                                    <a className="flex items-center text-gray-500 space-x-2" href="/new/">
                                      <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122">
                                        </path>
                                      </svg>
                                      <span>New Mentors</span>
                                    </a>
                                  </li>
                                  <li className="p-2 text-lg">
                                    <a className="flex items-center text-gray-500 space-x-2" href="/top/">
                                      <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                      </svg>
                                      <span>Top Mentors</span>
                                    </a>
                                  </li>
                                  <li className="p-2 text-lg">
                                    <a className="flex items-center text-gray-500 space-x-2" href="/sessions/introductory-call/">
                                      <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                      </svg>
                                      <span>Introductory Call</span>
                                    </a>
                                  </li>
                                  <li className="p-2 text-lg">
                                    <a className="flex items-center text-gray-500 space-x-2" href="/mentor/">
                                      <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11">
                                        </path>
                                      </svg>
                                      <span>Become a Mentor</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="businessesb" className="relative">
                          <a href="#" className="text-mc-shade-darkest text-sm font-bold pt-2 pb-8 pr-10">
                            <span className="angle-down">For Businesses</span>
                          </a>
                          <ul id="businesses-modalb" className="absolute bg-white z-10 w-72 flex-col h-auto font-medium p-4 rounded-lg mt-7 shadow-lg hidden">
                            <a className="text-navy-800 hover:text-navy-900" href="/teams/">
                              <li className="p-2 list-none text-md hover:bg-gray-100">Mentorship for Teams
                              </li>
                            </a>
                            <a className="text-navy-800 hover:text-navy-900" href="/teams/info/">
                              <li className="p-2 list-none text-md hover:bg-gray-100">Information for
                                Employers</li>
                            </a>
                            <a className="text-navy-800 hover:text-navy-900" href="/executives/">
                              <li className="p-2 list-none text-md hover:bg-gray-100">Executive &amp; CEO
                                Coaching</li>
                            </a>
                            <a className="text-navy-800 hover:text-navy-900" href="/startups/">
                              <li className="p-2 list-none text-md hover:bg-gray-100">Mentorship for
                                Startups</li>
                            </a>
                            <a className="text-navy-800 hover:text-navy-900" href="/top/">
                              <li className="p-2 list-none text-md hover:bg-gray-100">Pro Mentors</li>
                            </a>
                          </ul>
                        </div>
                        <div className="z-20">
                          <div className="mx-8">
                            <a className="bg-green-100 text-green-600 py-3 px-7 rounded-md text-base font-semibold hover:bg-green-300" href="/mentor/browse/" title="Find a mentor">
                              Browse all mentors
                            </a>
                          </div>
                        </div>
                        <div className="ml-6 text-mc-blue z-20">
                          <Link className="text-mc-shade-darkest text-sm font-bold" href="/auth/login" title="Login">
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div id="menub" className="z-20 absolute top-16 bg-gray-200 w-full shadow-lg hidden">
                      <ul>
                        <Link href="/mentor/browse/">
                          <li className="p-5 w-full border-gray-300 border-solid border-0 border-b-2">
                            <span className="text-mc-shade-darkest text-sm font-bold">Find a Mentor</span>
                          </li>
                        </Link>
                        <li id="businesses-mobileb" className="p-5 w-full border-gray-300 border-solid border-0 border-b-2">
                          <span className="text-mc-shade-darkest text-sm font-bold">For Businesses</span>
                          <div id="businesses-mobile-modalb" className="flex-col font-bold mt-4 rounded-lg drop-shadow-lg hidden">
                            <a className="text-navy-800 hover:text-navy-900" href="/teams/">
                              <div className="p-2 text-sm hover:bg-gray-100">Mentorship for Teams</div>
                            </a>
                            <a className="text-navy-800 hover:text-navy-900" href="/startups/">
                              <div className="p-2 text-sm hover:bg-gray-100">Mentorship for Startups</div>
                            </a>
                            <a className="text-navy-800 hover:text-navy-900" href="/top/">
                              <div className="p-2 text-sm hover:bg-gray-100">Premium Mentors</div>
                            </a>
                          </div>
                        </li>
                        <li className="flex p-5 border-gray-300 border-solid border-0 border-b-2">
                          <a className="bg-green-100 w-full text-center text-green-600 py-3 px-7 rounded-md font-semibold" href="/mentor/apply/" title="Find a mentor">
                            Get Started
                          </a>
                        </li>
                        <Link href="/auth/login/" title="Login">
                          <li className="p-5 w-full border-gray-300 border-solid border-0 border-b-2">
                            <span className="text-mc-shade-darkest text-sm font-bold">Login</span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </nav>
                </header>
              </div>
              </>
  );
};

export default Navbar;
