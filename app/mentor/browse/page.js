import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="justify-center items-stretch bg-white flex flex-col">
      <div className="bg-blue-950 flex min-h-[8px] w-full flex-col max-md:max-w-full" />
     <Navbar/>
      <div>
    <form className="justify-center flex w-full flex-col px-20 py-11 border-b border-solid items-start max-md:max-w-full max-md:px-5">
      <header className="justify-center overflow-hidden text-black text-opacity-50 text-ellipsis whitespace-nowrap text-sm leading-5 border border-gray-300 shadow-sm bg-white w-[432px] max-w-full ml-52 pl-4 pr-16 py-4 rounded-md border-solid items-start max-md:pr-5">
        Search by skill or job title
      </header>
      <div className="items-stretch flex gap-4 ml-52 mt-8 mb-2 max-md:max-w-full max-md:flex-wrap">
        <a
          href="#"
          className="items-center border border-gray-300 bg-white flex justify-between gap-4 px-6 pr-6 py-4 rounded-full border-solid max-md:pl-5"
        >
          <div className="text-blue-950 text-sm leading-5 my-auto">Skills</div>
          
        </a>
        <a
          href="#"
          className="items-center border border-gray-300 bg-white flex justify-between gap-3.5 px-6 pr-6 py-4 rounded-full border-solid max-md:pl-5"
        >
          <div className="text-blue-950 text-sm leading-5 my-auto">Tools</div>
          
        </a>
        <a
          href="#"
          className="items-center border border-gray-300 bg-white flex justify-between gap-4 pl-6 pr-6 py-4 rounded-full border-solid max-md:pl-5"
        >
          <div className="text-blue-950 text-sm leading-5 my-auto">Industries</div>
          
        </a>
        <a
          href="#"
          className="items-center border border-gray-300 bg-white flex justify-between gap-3.5 px-6 py-4 rounded-full border-solid max-md:pl-5"
        >
          <div className="text-blue-950 text-sm leading-5 my-auto">Price</div>
      
        </a>
      </div>
    </form>
      </div>
      <span className="flex w-full flex-col mt-9 pl-20 pr-10 items-start max-md:max-w-full max-md:px-5">
        <div className="text-gray-500 text-base font-semibold leading-6 whitespace-nowrap ml-48 max-md:ml-2.5">
          1,000+ mentors found
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-0 mt-4 max-md:max-w-full max-md:flex-wrap">
          <div className="items-center flex grow basis-[0%] flex-col pt-6 px-16 max-md:max-w-full max-md:px-5">
            <div className="flex w-[896px] max-w-full flex-col items-stretch">
              <div className="border border-gray-300 bg-white flex flex-col pb-8 px-7 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
                <span className="justify-center items-stretch  bg-white flex gap-1 pb-2 px-2.5 rounded-2xl border-2 border-solid self-end">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/edefbf51027488ba0c9622b7595f439ccbde589469b052d3cb14d665fa49354d?"
                    className="aspect-[1.78] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-500 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                    Only 1 Spot Left
                  </div>
                </span>
                <div className="w-[798px] max-w-full mt-4">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                      <div className="flex-col overflow-hidden relative flex aspect-[0.6041666666666666] w-[174px] justify-center items-stretch rounded-lg max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative flex flex-col pl-16 pr-4 pt-12 pb-6 items-end max-md:pl-5">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full mt-44 max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <span className="flex items-stretch justify-between gap-3 self-start">
                          <div className="text-blue-950 text-2xl font-bold leading-8 self-center grow whitespace-nowrap my-auto">
                            Krunal Parmar
                          </div>
                          <div className="text-blue-950 text-xl font-bold leading-7 self-center my-auto">
                            🇬🇧
                          </div>
                          <span className="justify-between items-stretch bg-teal-100 flex gap-2 px-4 py-2.5 rounded-full">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/872d647dc66d3547f248e08a94219cf8232a51d759bd05f64897d29d41c7a1f8?"
                              className="aspect-[0.93] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-teal-800 text-sm font-bold leading-5 grow whitespace-nowrap self-start">
                              Top Mentor
                            </div>
                          </span>
                        </span>
                        <span className="items-stretch flex gap-0 mt-2 px-0.5 self-start">
                          <div className="text-blue-950 text-base leading-6 grow whitespace-nowrap">
                            Engineering Manager
                          </div>
                          <div className="text-blue-950 text-base leading-6 whitespace-nowrap">
                            at{" "}
                            <span className="font-bold text-blue-950">
                              Yelp
                            </span>
                          </div>
                        </span>
                        <div className="text-teal-700 text-base font-medium leading-6 self-stretch mt-1 max-md:max-w-full">
                          Mentor and Tech Leader | Elevating Careers
                        </div>
                        <span className="flex items-stretch gap-1.5 mt-3 self-start">
                          <span className="text-stone-300 text-lg leading-7 whitespace-nowrap grow justify-center items-stretch pt-1.5 pb-0.5">
                            ★★★★★
                          </span>
                          <div className="text-blue-950 text-sm font-bold leading-5 mt-2 self-start">
                            5.0
                          </div>
                          <div className="text-blue-950 text-sm leading-5 grow whitespace-nowrap mt-1.5 self-start">
                            (8 reviews)
                          </div>
                        </span>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-4 mt-8 max-md:max-w-full max-md:mr-2.5">
                          As an Engineering Manager I lead a team of software
                          developers responsible for developing and maintaining a content platform that
                          stores and serves business information in an efficient and accurate way. In this
                          role, I manage the team's projects,  set priorities, and ensure that we deliver
                          high-quality products on time …
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-2 mt-6 pr-14 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            Software Engineering
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            Data Structures
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 aspect-[2.125] px-3.5 py-2 rounded-full">
                            Java
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 aspect-[2.75] px-3.5 py-2 rounded-full">
                            Python
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            Communication
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 px-3.5 py-2 rounded-full">
                    Interview
                  </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[584px] max-w-full flex-col mr-10 mt-2 self-end items-start max-md:mr-2.5">
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <span className="items-stretch flex basis-[0%] flex-col pt-3">
                      <div className="text-black text-base font-semibold leading-6">
                        Starting at
                      </div>
                      <div className="text-black text-3xl font-bold leading-9">
                        $39
                      </div>
                    </span>
                    <span className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-center bg-teal-700 grow px-16 py-4 rounded-md self-start max-md:px-5">
                      View Profile
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 bg-white flex flex-col mt-12 pb-8 px-7 rounded-xl border-solid items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                <span className="justify-center items-stretch border bg-white flex gap-1 pb-2 px-3 rounded-2xl border-2 border-solid self-end">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb7cb625cead11eb2acb2c36ee008b9e278646a4a1990dca08108f7042618e6?"
                    className="aspect-[1.6] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-gray-500 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                    Only 4 Spots Left
                  </div>
                </span>{" "}
                <div className="w-[798px] max-w-full mt-4">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                      <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-[0.6041666666666666] w-[174px] rounded-lg max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />{" "}
                        <div className="relative flex shrink-0 h-72 flex-col" />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <span className="self-stretch flex items-stretch justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-blue-950 text-2xl font-bold leading-8 self-center grow shrink basis-auto my-auto">
                            Jamie Goodson
                          </div>{" "}
                          <div className="text-blue-950 text-xl font-bold leading-7 self-center my-auto">
                            🇬🇧
                          </div>{" "}
                          <span className="justify-between items-stretch bg-teal-100 flex gap-2 px-6 py-2.5 rounded-full max-md:px-5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd3bd54cef32802e01b28356b1ecf1440e53ba87011214707629bd74d1f94c2?"
                              className="aspect-[0.93] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <div className="text-teal-800 text-sm font-bold leading-5">
                              Quick Responder
                            </div>
                          </span>
                        </span>{" "}
                        <span className="items-stretch flex gap-0 mt-2 px-0.5 self-start">
                          <div className="text-blue-950 text-base leading-6 grow whitespace-nowrap">
                            Senior UX Designer
                          </div>{" "}
                          <div className="text-blue-950 text-base leading-6 whitespace-nowrap">
                            at{" "}
                            <span className="font-bold text-blue-950">BBC</span>
                          </div>
                        </span>{" "}
                        <div className="text-teal-700 text-base font-medium leading-6 self-start max-md:max-w-full">
                          👋🏻 I am a super friendly and easy to talk to
                          full-stack designer with 10+{" "}
                        </div>{" "}
                        <div className="text-teal-700 text-base font-medium leading-6 self-start max-md:max-w-full">
                          years of industry experience!
                        </div>{" "}
                        <span className="flex items-stretch gap-1.5 mt-2 self-start">
                          <span className="text-stone-300 text-lg leading-7 whitespace-nowrap grow justify-center items-stretch pt-2 pb-1">
                            ★★★★★
                          </span>{" "}
                          <div className="text-blue-950 text-sm font-bold leading-5 mt-2 self-start">
                            5.0
                          </div>{" "}
                          <div className="text-blue-950 text-sm leading-5 grow whitespace-nowrap mt-1.5 self-start">
                            (19 reviews)
                          </div>
                        </span>{" "}
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mt-8 max-md:max-w-full max-md:mr-1.5">
                          👋🏻 Currently sculpting experiences for millions of
                          weekly users as part of BBC's UX{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch max-md:max-w-full max-md:mr-1.5">
                          design team! 📱I specialise in digital products to
                          achieve data-driven results,{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch max-md:max-w-full max-md:mr-1.5">
                          approaching my work with a user-centric mindset I
                          enjoy solving complex problems{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch max-md:max-w-full max-md:mr-1.5">
                          through wireframing, design sprints, usability
                          studies, prototyping, and design systems.{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch max-md:max-w-full max-md:mr-1.5">
                          My past roles …
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-2 mt-6 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            User Experience
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            User Interface
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            User Experience Design
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            Mobile Design
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[584px] max-w-full flex-col mr-10 mt-2 self-end items-start max-md:mr-2.5">
                  <div className="flex items-stretch gap-2">
                    <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                      UI Design
                    </span>
                    <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                      UX Design
                    </span>
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <span className="items-stretch flex basis-[0%] flex-col pt-3">
                      <div className="text-black text-base font-semibold leading-6">
                        Starting at
                      </div>
                      <div className="text-black text-3xl font-bold leading-9">
                        $39
                      </div>
                    </span>
                    <span className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-center bg-teal-700 grow px-16 py-4 rounded-md self-start max-md:px-5">
                      View Profile
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 bg-white flex flex-col mt-12 pb-8 px-7 rounded-xl border-solid items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
                <span className="justify-center items-stretch border bg-white flex gap-1 pb-2 px-3 rounded-2xl border-2 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/30137a187569ea89a31075d25acd8f3ef22c4952ede682edb697a277671b2631?"
                    className="aspect-[1.6] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-500 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                    Only 3 Spots Left
                  </div>
                </span>
                <div className="self-stretch mt-4 max-md:max-w-full max-md:pr-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                      <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-[0.6041666666666666] w-[174px] rounded-lg max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative flex shrink-0 h-72 flex-col" />
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <span className="flex w-[326px] max-w-full items-stretch justify-between gap-3 self-start">
                          <div className="text-blue-950 text-2xl font-bold leading-8 self-center grow whitespace-nowrap my-auto">
                            Chris Nicol
                          </div>
                          <div className="text-blue-950 text-xl font-bold leading-7 self-center my-auto">
                            🇬🇧
                          </div>
                          <span className="justify-between bg-teal-100 flex gap-2 px-4 py-2.5 rounded-full items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/564770c349d64eb2cba3352037737ea9e1c5afb55410b649644b6cef1d8039d3?"
                              className="aspect-[0.93] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-teal-800 text-sm font-bold leading-5 grow whitespace-nowrap">
                              Top Mentor
                            </div>
                          </span>
                        </span>
                        <span className="items-stretch flex gap-0 mt-2 px-0.5 self-start">
                          <div className="text-blue-950 text-base leading-6 grow whitespace-nowrap">
                            VP of Product
                          </div>
                          <div className="text-blue-950 text-base leading-6 grow whitespace-nowrap">
                            at{" "}
                            <span className="font-bold text-blue-950">
                              Hubble
                            </span>
                          </div>
                        </span>
                        <div className="text-teal-700 text-base font-medium leading-6 self-stretch mt-2.5 max-md:max-w-full">
                          Product Leader & Coach
                        </div>
                        <span className="flex items-stretch gap-1.5 mt-5 self-start">
                          <div className="text-stone-300 text-lg leading-7 grow whitespace-nowrap">
                            ★★★★★
                          </div>
                          <div className="text-blue-950 text-sm font-bold leading-5 self-center my-auto">
                            5.0
                          </div>
                          <div className="text-blue-950 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                            (10 reviews)
                          </div>
                        </span>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-4 mt-8 max-md:max-w-full max-md:mr-2.5">
                          🌱 Are you looking to grow in your PM career? I'd love
                          to help. I've managed, mentored{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-4 max-md:max-w-full max-md:mr-2.5">
                          and coached lots of amazing Product Managers over the
                          last 10 years. I can help you{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-4 max-md:max-w-full max-md:mr-2.5">
                          understand your strengths, align your work to what
                          energizes you and help you move{" "}
                        </div>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-4 max-md:max-w-full max-md:mr-2.5">
                          forward in your …
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-2 mr-4 mt-6 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            Product Management
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            Leadership Coaching
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3 py-1.5 rounded-full">
                            Product Strategy
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            Product Visioning
                          </span>
                        </div>
                        <div className="flex items-stretch gap-2 mt-2 self-start">
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            Career Growth
                          </span>
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            People Management
                          </span>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-4 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                          <span className="items-stretch flex basis-[0%] flex-col pt-3">
                            <div className="text-black text-base font-semibold leading-6">
                              Starting at
                            </div>
                            <div className="text-black text-3xl font-bold leading-9">
                              $180
                            </div>
                          </span>
                          <span className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-center bg-teal-700 grow px-16 py-4 rounded-md self-start max-md:px-5">
                            View Profile
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 bg-white flex flex-col mt-12 pb-8 px-7 rounded-xl border-solid items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
                <span className="justify-center items-stretch border bg-white flex gap-1 pb-2 px-3 rounded-2xl border-2 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7324ab50575f8e607c4a85ba1a7c2701b437ee81ce434dbda3a7b3fdb006283a?"
                    className="aspect-[1.78] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-500 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                    Only 2 Spots Left
                  </div>
                </span>
                <div className="self-stretch mt-4 max-md:max-w-full max-md:pr-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                      <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-[0.6041666666666666] w-[174px] rounded-lg max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative flex shrink-0 h-72 flex-col" />
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <span className="self-stretch flex items-stretch justify-between gap-3 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-blue-950 text-2xl font-bold leading-8 self-center grow shrink basis-auto my-auto">
                            Maria Teresa Stella
                          </div>
                          <div className="text-blue-950 text-xl font-bold leading-7 self-center my-auto">
                            🇮🇹
                          </div>
                          <span className="justify-between items-stretch bg-teal-100 flex gap-2 px-6 py-2.5 rounded-full max-md:px-5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0570fb25462ea9e177cc6001da44282236447a49a73ebe826f5ec5201abee9a?"
                              className="aspect-[0.93] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-teal-800 text-sm font-bold leading-5">
                              Top Mentor
                            </div>
                          </span>
                        </span>
                        <span className="items-stretch flex gap-0 mt-2 pr-1.5 self-start">
                          <div className="text-blue-950 text-base leading-6 grow whitespace-nowrap">
                            Senior UX Designer
                          </div>
                          <div className="text-blue-950 text-base leading-6 grow whitespace-nowrap">
                            at{" "}
                            <span className="font-bold text-blue-950">
                              Cerved Group SPA
                            </span>
                          </div>
                        </span>
                        <div className="text-teal-700 text-base font-medium leading-6 self-start max-md:max-w-full">
                          5+ years of experience in UX Design | Mentoring
                          students and young{" "}
                        </div>
                        <div className="text-teal-700 text-base font-medium leading-6 self-start max-md:max-w-full">
                          professionals since 2019
                        </div>
                        <span className="flex items-stretch gap-1.5 mt-2 self-start">
                          <span className="text-stone-300 text-lg leading-7 whitespace-nowrap grow justify-center items-stretch pt-2 pb-1">
                            ★★★★★
                          </span>
                          <div className="text-blue-950 text-sm font-bold leading-5 mt-2 self-start">
                            5.0
                          </div>
                          <div className="text-blue-950 text-sm leading-5 grow whitespace-nowrap mt-1.5 self-start">
                            (13 reviews)
                          </div>
                        </span>
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-3 mt-8 max-md:max-w-full max-md:mr-2.5">
                          Ciao! I'm a Senior UX Designer from Italy with 5+yrs
                          experience in the field, offering{" "}
                        </div>{" "}
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-3 max-md:max-w-full max-md:mr-2.5">
                          mentoring services to aspiring and junior designers. I
                          have a passion for helping others{" "}
                        </div>{" "}
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-3 max-md:max-w-full max-md:mr-2.5">
                          grow and succeed in their careers, and I believe I can
                          make a real difference in your{" "}
                        </div>{" "}
                        <div className="text-neutral-600 text-sm leading-6 self-stretch mr-3 max-md:max-w-full max-md:mr-2.5">
                          professional journey. I can …
                        </div>{" "}
                        <div className="self-stretch flex items-stretch justify-between gap-2 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            UX Research
                          </span>{" "}
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            UX Design
                          </span>{" "}
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-2 rounded-full">
                            Ux Strategy
                          </span>{" "}
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 grow px-3.5 py-1.5 rounded-full">
                            UX & Design
                          </span>{" "}
                          <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 aspect-[2.4583333333333335] px-3.5 py-1.5 rounded-full">
                            Figma
                          </span>
                        </div>{" "}
                        <span className="text-gray-700 text-xs font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-100 mt-2 px-3.5 py-1.5 rounded-full self-start">
                          Product Design
                        </span>{" "}
                        <div className="items-stretch self-stretch flex justify-between gap-4 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                          <span className="items-stretch flex basis-[0%] flex-col pt-3">
                            <div className="text-black text-base font-semibold leading-6">
                              Starting at
                            </div>{" "}
                            <div className="text-black text-3xl font-bold leading-9">
                              $39
                            </div>
                          </span>{" "}
                          <span className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-center bg-teal-700 grow px-16 py-4 rounded-md self-start max-md:px-5">
                            View Profile
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              
            </div>
          </div>
          <div className="justify-end items-center shadow-sm bg-white bg-opacity-0 flex w-[60px] shrink-0 h-[60px] flex-col mt-96 rounded-[60px] self-start max-md:mt-10" />
        </div>
        <span className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-blue-900 self-center ml-6 mt-6 px-7 py-4 rounded-md max-md:px-5">
          Show more
        </span>
      </span>
      <Footer/>
    </div>


    </>
  )
}

export default page