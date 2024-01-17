import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="space-y-8">
                <div className="mt-16 mb-12 mx-auto max-w-7xl px-4 sm:mt-20">
                  <p className="text-navy-900 text-center text-md leading-7 font-normal mt-2 mb-6">
                    Learn a new skill, launch a project, land your dream career.
                  </p>
                  <h1 className="text-center tracking-tight font-normal text-6xl leading-tighter">
                    <span className="font-bold text-navy-900">1-on-1</span>
                    <span className="font-bold text-teal-600" id="typed-headline">Career</span><br className="hidden sm:block" />
                    <span className="font-bold text-navy-900 -ml-2">Mentorship</span>
                  </h1><h1 className="hidden">1-on-1 Mentorship</h1>
                </div>
                <div className="flex flex-col md:flex-row mx-4 md:m-auto max-w-screen-md mt-4">
                  <div className="w-full">
                    <form action="/mentor/browse/" method="get" className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row relative w-full text-center text-navy-900 drop-shadow-2xl bg-white p-4 md:py-4 md:pl-8 md:pr-3 md:m-auto md:max-w-2xl lg:max-w-none rounded-xl">
                      <div className="flex w-full">
                        <input type="text" name="search" placeholder="Search by company, skills or role" autoComplete="off" tabIndex={0} id="autocomplete" className="w-full text-base p-2 md:pl-4 font-medium md:text-lg border-0 placeholder-opacity-80 placeholder-mc-shade-dark text-navy-900 outline-none" />
                      </div>
                      <div>
                        <button type="submit" className="blue-btn whitespace-nowrap">
                          Search mentors
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="my-24">
                  <div className="relative flex overflow-x-hidden">
                    <div className="py-12 animate-marquee whitespace-nowrap">
                      <a href="/mentor/ahmedsadmanmuhib/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/93cd074f167b6d290120c2a8d24253ff/18c7c0a451fcad6a/14853b7ec60fb47794ea388c58c39c6f.jpg" alt="Ahmed Sadman Muhib" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Ahmed Sadman Mu…</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Software Engineer at
                              Optimizely</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/mansonng/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/687157817447a5f363d4ce742118db77/b75cc6c8dabfc538/b32dc153d240f2d42ed99b403e150f95.jpg" alt="Manson Ng" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Manson Ng</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Prinicipal Software Engi…
                              at
                              Microsoft</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/romanyusufov/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/e6ea356ec133173c5c0bcd8ca0d553fb/ea9efa3abf801d3c/b74863c37a455dbb760eacdc22ecfa50.jpg" alt="Roman Yusufov" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Roman Yusufov</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Senior Software Engineer…
                              at
                              Amazon</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/annakotliarevskaia/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/29bfc16d09a89197a7ebaa92f7c37f2d/86af0dc48f0704df/bebda3e98b1a43deddd59d57034f312d.jpg" alt="Anna Peterson" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Anna Peterson</h3>
                            <span className="text-gray-400 text-sm mt-2">Product Leadership Coach
                              (ex-Director o…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/AndreiGavrila/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/8cc909da61293f82d95f8303ee497c79/782ac56053cfe2dd/2ca6cb539106ae08468acfdd6574ac34.jpg" alt="Andrei Gavrila" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Andrei Gavrila</h3>
                            <span className="text-gray-400 text-sm mt-2">CTO | Technical Advisor | Agile
                              Coach |…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/ayansengupta/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/56ba1a3417579c4fb5cf599d44a40734/252cfe7dc754c10e/60adf4993c429b67c878f182cb2108b6.jpg" alt="Ayan Sengupta" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Ayan Sengupta</h3>
                            <span className="text-gray-400 text-sm mt-2">Senior Machine Learning
                              Engineer</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/sanjeevsubedi/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/7cc9ae24bfac0d75a8ac425e2630084a/e725af5a79338631/27e0c5ff9c83159f7069ae195b9a1302.jpg" alt="Sanjeev Subedi" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Sanjeev Subedi</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Staff Software Engineer
                              at
                              eBay</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/praveendubey/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/80f62f07514ce6826a3c552ee40cd025/0511ddab232da2b7/7ee7430968a9fff75667f8d089fb5887.jpg" alt="Praveen Dubey" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Praveen Dubey</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Software Engineer II at
                              Microsoft</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/krunalparmar/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/ea4d8030b5d58183d5b2d75eaeb68fc4/a9028ecfe7268a86/5ac2f669820f7aae959ed1a4f7b76309.jpg" alt="Krunal Parmar" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Krunal Parmar</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Engineering Manager at
                              Yelp</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/turkerbilgin/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/bbc8b0d2675125676d7a12a7d0cd0ed6/6e0764d98b483944/1cf9e96b90b27e5595c775149a290d1a.jpg" alt="Türker Bilgin" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Türker Bilgin</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Brand Marketing Director
                              at
                              Unilever</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/benjaminkaiser/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/acd7a4e579968df1478e1a66ba32f8af/700fe4a6a4f33e2d/4613c63fe73990a9e0dcf79861dfbf09.jpg" alt="Benjamin Kaiser" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Benjamin Kaiser</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Principal Software Engin…
                              at
                              Microsoft</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/DominicMonn/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/bc52f31b9ad3b15f963909cd06d2750a/54352a8fb7785f5f/1010e72484ea6d7f4c1ea83b01682d56.jpg" alt="Dominic Monn" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Dominic Monn</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Founder at
                              MentorCruise</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/harryoconnor/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/faec54785f7d56b3b05e24a97bba74d7/ea176cfe665f3025/ff4762b3ac1a4a635ff74857f4adf171.jpg" alt="Harry O'Connor" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Harry O'Connor
                            </h3>
                            <span className="text-gray-400 text-sm mt-2">Founder</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/mohannadelhamod/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/77283af1a0033aabdcff846435ef3ed2/d7f0ec11b83f40a9/8b7447e14222d8df6276a25d57e678d7.jpg" alt="Mohannad Elhamod" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Mohannad Elhamod</h3>
                            <span className="text-gray-400 text-sm mt-2">Clinical Assistant Profess |
                              Machine Le…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/julienleforestier/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/d51c4c431d2e5a58e1afb1d32cfc87fd/a5f7fc2cc2e2e86f/085f6d9e14ce7b6d9f58ea4964518a07.jpg" alt="Julien Leforestier" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Julien Leforest…</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Senior User Researcher at
                              Spotify</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/akramriahi/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/813a45868bd17f5738efb81b86da70a4/d3ab473ff5610696/0973902bdbaf32bd9167c327ccb6de90.jpg" alt="Akram Riahi" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Akram Riahi</h3>
                            <span className="text-gray-400 text-sm mt-2">Senior SRE/Chaos
                              Engineer/Speaker</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/jaretandre/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/047a8bce7941dc6f3ef2fbcda8201d43/5dba0ced77fd6d8a/b8609c3cc6592556040ac33fe6bd5a72.jpg" alt="Jaret Andre" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Jaret Andre</h3>
                            <span className="text-gray-400 text-sm mt-2">Data Science Mentor (Full-time) |
                              Ex Da…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/chrisnicol/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/520dade6f45e27f89dd0aa224deddfa9/d2f8e3f2cf72a694/34af6f11ce643d06f357a56205ba0bf7.jpg" alt="Chris Nicol" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Chris Nicol</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">VP of Product at
                              Hubble</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/phonghuynh/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/ce8b3f703521efa087e64dcc439d7b1e/d5244538229eb80d/363e57151149036c0e275ddb621892e5.jpg" alt="Phong Huynh" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Phong Huynh</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Senior Software Engineer
                              at
                              Square</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/federicomaffini/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/5d7163a9a018117fca7deaea452695f0/fe7e527a46ff8f70/cf6fc4ddd75094ef8846e7484945c6ad.jpg" alt="Federico Maffini" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Federico Maffini</h3>
                            <span className="text-gray-400 text-sm mt-2">Global Leader | Program Management
                              | Da…</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                      <a href="/mentor/ahmedsadmanmuhib/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/93cd074f167b6d290120c2a8d24253ff/18c7c0a451fcad6a/14853b7ec60fb47794ea388c58c39c6f.jpg" alt="Ahmed Sadman Muhib" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Ahmed Sadman Mu…</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Software Engineer at
                              Optimizely</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/mansonng/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/687157817447a5f363d4ce742118db77/b75cc6c8dabfc538/b32dc153d240f2d42ed99b403e150f95.jpg" alt="Manson Ng" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Manson Ng</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Prinicipal Software Engi…
                              at
                              Microsoft</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/romanyusufov/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/e6ea356ec133173c5c0bcd8ca0d553fb/ea9efa3abf801d3c/b74863c37a455dbb760eacdc22ecfa50.jpg" alt="Roman Yusufov" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Roman Yusufov</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Senior Software Engineer…
                              at
                              Amazon</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/annakotliarevskaia/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/29bfc16d09a89197a7ebaa92f7c37f2d/86af0dc48f0704df/bebda3e98b1a43deddd59d57034f312d.jpg" alt="Anna Peterson" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Anna Peterson</h3>
                            <span className="text-gray-400 text-sm mt-2">Product Leadership Coach
                              (ex-Director o…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/AndreiGavrila/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/8cc909da61293f82d95f8303ee497c79/782ac56053cfe2dd/2ca6cb539106ae08468acfdd6574ac34.jpg" alt="Andrei Gavrila" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Andrei Gavrila</h3>
                            <span className="text-gray-400 text-sm mt-2">CTO | Technical Advisor | Agile
                              Coach |…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/ayansengupta/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/56ba1a3417579c4fb5cf599d44a40734/252cfe7dc754c10e/60adf4993c429b67c878f182cb2108b6.jpg" alt="Ayan Sengupta" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Ayan Sengupta</h3>
                            <span className="text-gray-400 text-sm mt-2">Senior Machine Learning
                              Engineer</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/sanjeevsubedi/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/7cc9ae24bfac0d75a8ac425e2630084a/e725af5a79338631/27e0c5ff9c83159f7069ae195b9a1302.jpg" alt="Sanjeev Subedi" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Sanjeev Subedi</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Staff Software Engineer
                              at
                              eBay</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/praveendubey/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/80f62f07514ce6826a3c552ee40cd025/0511ddab232da2b7/7ee7430968a9fff75667f8d089fb5887.jpg" alt="Praveen Dubey" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Praveen Dubey</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Software Engineer II at
                              Microsoft</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/krunalparmar/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/ea4d8030b5d58183d5b2d75eaeb68fc4/a9028ecfe7268a86/5ac2f669820f7aae959ed1a4f7b76309.jpg" alt="Krunal Parmar" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Krunal Parmar</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Engineering Manager at
                              Yelp</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/turkerbilgin/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/bbc8b0d2675125676d7a12a7d0cd0ed6/6e0764d98b483944/1cf9e96b90b27e5595c775149a290d1a.jpg" alt="Türker Bilgin" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Türker Bilgin</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Brand Marketing Director
                              at
                              Unilever</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/benjaminkaiser/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/acd7a4e579968df1478e1a66ba32f8af/700fe4a6a4f33e2d/4613c63fe73990a9e0dcf79861dfbf09.jpg" alt="Benjamin Kaiser" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Benjamin Kaiser</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Principal Software Engin…
                              at
                              Microsoft</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/DominicMonn/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/bc52f31b9ad3b15f963909cd06d2750a/54352a8fb7785f5f/1010e72484ea6d7f4c1ea83b01682d56.jpg" alt="Dominic Monn" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Dominic Monn</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Founder at
                              MentorCruise</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/harryoconnor/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/faec54785f7d56b3b05e24a97bba74d7/ea176cfe665f3025/ff4762b3ac1a4a635ff74857f4adf171.jpg" alt="Harry O'Connor" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Harry O'Connor
                            </h3>
                            <span className="text-gray-400 text-sm mt-2">Founder</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/mohannadelhamod/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/77283af1a0033aabdcff846435ef3ed2/d7f0ec11b83f40a9/8b7447e14222d8df6276a25d57e678d7.jpg" alt="Mohannad Elhamod" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Mohannad Elhamod</h3>
                            <span className="text-gray-400 text-sm mt-2">Clinical Assistant Profess |
                              Machine Le…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/julienleforestier/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/d51c4c431d2e5a58e1afb1d32cfc87fd/a5f7fc2cc2e2e86f/085f6d9e14ce7b6d9f58ea4964518a07.jpg" alt="Julien Leforestier" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Julien Leforest…</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Senior User Researcher at
                              Spotify</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/akramriahi/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/813a45868bd17f5738efb81b86da70a4/d3ab473ff5610696/0973902bdbaf32bd9167c327ccb6de90.jpg" alt="Akram Riahi" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Akram Riahi</h3>
                            <span className="text-gray-400 text-sm mt-2">Senior SRE/Chaos
                              Engineer/Speaker</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/jaretandre/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/047a8bce7941dc6f3ef2fbcda8201d43/5dba0ced77fd6d8a/b8609c3cc6592556040ac33fe6bd5a72.jpg" alt="Jaret Andre" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Jaret Andre</h3>
                            <span className="text-gray-400 text-sm mt-2">Data Science Mentor (Full-time) |
                              Ex Da…</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/chrisnicol/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/520dade6f45e27f89dd0aa224deddfa9/d2f8e3f2cf72a694/34af6f11ce643d06f357a56205ba0bf7.jpg" alt="Chris Nicol" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Chris Nicol</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">VP of Product at
                              Hubble</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/phonghuynh/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/ce8b3f703521efa087e64dcc439d7b1e/d5244538229eb80d/363e57151149036c0e275ddb621892e5.jpg" alt="Phong Huynh" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Phong Huynh</h3>
                            <span className="text-gray-400 text-sm mt-2" lang="en">Senior Software Engineer
                              at
                              Square</span>
                          </div>
                        </div>
                      </a>
                      <a href="/mentor/federicomaffini/?ref=home_slider&source=featured" className="mx-2 inline-block w-[200px] h-[200px] align-bottom" target="_blank">
                        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
                          <img className="block w-16 h-16 mx-auto rounded-full mx-auto" src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/5d7163a9a018117fca7deaea452695f0/fe7e527a46ff8f70/cf6fc4ddd75094ef8846e7484945c6ad.jpg" alt="Federico Maffini" />
                          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                            <h3 className="font-bold text-navy-900 whitespace-nowrap">Federico Maffini</h3>
                            <span className="text-gray-400 text-sm mt-2">Global Leader | Program Management
                              | Da…</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Hero