import React from 'react'

const page = () => {
  return (
    <>
  
    <div className="flex items-stretch justify-between  max-md:flex-wrap">
      {/* Left Side */}
      <div className="items-center bg-blue-950 flex flex-col w-full px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          src="/images/logo.png"
          className="aspect-square object-contain object-center w-24  overflow-hidden max-w-full mt-80 mb-72 max-md:my-10"
        />
      </div>
      {/* Right Side */}
      <span className="items-start self-center flex flex-col my-auto px-5">
        <div className="text-gray-900 text-3xl font-extrabold leading-9 self-stretch">
          Log in
        </div>
        <span className="justify-between items-stretch self-stretch flex gap-5 mt-8 pr-14 border-b border-solid max-md:pr-5">
          <span className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch grow px-12 py-6 border-b-2 border-b-teal-600 border-solid max-md:px-5">
            I'm a mentee
          </span>{" "}
          <div className="text-gray-500 text-sm font-medium leading-5 self-center my-auto">
            I'm a mentor
          </div>
        </span>
        <div className="text-gray-700 text-sm font-medium leading-5 self-stretch mt-7">
          Email or username
        </div>
        <div className="border border-gray-300 shadow-sm bg-white self-stretch flex shrink-0 h-[38px] flex-col mt-1 rounded-md border-solid" />
        <div className="text-gray-700 text-sm font-medium leading-5 self-stretch mt-5">
          Password
        </div>
        <div className="border border-gray-300 shadow-sm bg-white self-stretch flex shrink-0 h-[38px] flex-col mt-1 rounded-md border-solid" />
        <span className="text-white text-xs font-semibold leading-5 whitespace-nowrap items-center bg-teal-700 self-stretch justify-center mt-6 px-16 py-3.5 rounded-md max-md:px-5">
          Log in
        </span>
        <span className="text-gray-500 text-base leading-6 whitespace-nowrap justify-center items-stretch bg-white self-center aspect-[1.4583333333333333] mt-4 px-2.5 py-1.5">
          Or
        </span>
        <div className="justify-center items-center border border-gray-300 shadow-sm bg-white self-stretch flex w-full flex-col mt-4 px-16 py-3 rounded-md border-solid max-md:px-5">
          <span className="flex items-stretch gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0337e51f0ff6de7a3b999ca6d643a7c0c31cc6c7dc9cfb657e0233edd89aac?apiKey=2cd147df3fdf4326802e5aeb34144d32&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-900 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
              Log in with Google
            </div>
          </span>
        </div>
        <div className="text-teal-700 text-sm font-semibold leading-5 underline self-stretch mt-7">
          Forgot password?
        </div>
        <div className="text-neutral-600 text-sm leading-5 self-stretch mt-5">
          Don’t have an account?
        </div>
        <div className="text-neutral-600 text-sm font-semibold leading-5 underline self-stretch">
          Sign up as a mentee<span className=" text-neutral-600"> or </span>
        </div>
      </span>
    </div>


    </>
  )
}

export default page