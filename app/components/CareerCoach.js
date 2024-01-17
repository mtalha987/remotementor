import React from 'react'

const CareerCoach = () => {
  return (
    <>
    <div id="explainer" className='bg-[#172E59]'>
            <div className="bg-navy-900 text-white">
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                  <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h2 className="text-3xl lg:text-center mx-auto max-w-2xl text-white font-bold tracking-tight sm:text-4xl">
                      At your fingertips: a dedicated career coach.</h2>
                    <p className="text-xl lg:text-center mx-auto max-w-3xl">Want to ace your next job interview?
                      Successfully build your startup? Itching to learn high-demand skills? Work smart with an
                      online mentor or <a href="/coach/" className="text-white underline">coach</a> by your side
                      to
                      offer
                      expert advice and guidance to match your zeal.
                      Become unstoppable using MentorCruise.
                    </p>
                  </div>
                  <ul className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                    <li className="text-white bg-navy-900">
                      <div className="p-6 text-left rounded-lg xl:px-10">
                        <div className="space-y-2">
                          <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="font-medium text-lg leading-6 space-y-1">
                              <div className="flex justify-center">
                                <h3 className="font-bold text-2xl w-auto h-auto">Find Your Mentor</h3>
                              </div>
                              <div className="flex justify-center px-10 py-4">
                                <img src="https://cdn.mentorcruise.com/img/home/icons/mc-logo.svg" alt="MentorCruise" />
                              </div>
                              <div>
                                <p className="my-4 text-base text-center">Explore our growing catalogue
                                  of experienced mentors until you find the perfect fit.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="text-white bg-navy-900">
                      <div className="p-6 text-left rounded-lg xl:px-10">
                        <div className="space-y-2">
                          <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="font-medium text-lg leading-6 space-y-1">
                              <div className="flex justify-center">
                                <h3 className="font-bold text-2xl w-auto h-auto">Apply for Mentorship
                                </h3>
                              </div>
                              <div className="flex justify-center px-10 py-4">
                                <img src="https://cdn.mentorcruise.com/img/home/icons/mc-edit.svg" alt="MentorCruise" />
                              </div>
                              <div>
                                <p className="my-4 text-base text-center">Fill in an application, and if
                                  you’re a match with your chosen mentor you can start your free
                                  7-day trial.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="text-white bg-navy-900">
                      <div className="p-6 text-left rounded-lg xl:px-10">
                        <div className="space-y-2">
                          <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="font-medium text-lg leading-6 space-y-1">
                              <div className="flex justify-center">
                                <h3 className="font-bold text-2xl w-auto h-auto">Level up your skills
                                </h3>
                              </div>
                              <div className="flex justify-center px-10 py-4">
                                <img src="https://cdn.mentorcruise.com/img/home/icons/mc-rocket.svg" alt="MentorCruise" />
                              </div>
                              <div>
                                <p className="my-4 text-base text-center">From personal chats to
                                  hands-on support, each mentor offers different services to help
                                  you skyrocket your career.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <a href="/mentor/browse/">
                      <button type="submit" className="teal-btn" href="/mentor/browse/">Find my mentor
                      </button>
                    </a><a className="flex justify-center w-full md:w-auto text-sm text-white underline font-semibold hover:text-mc-green" href="/mentor/">Become a Mentor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default CareerCoach