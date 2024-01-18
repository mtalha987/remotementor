import React from "react";
import mentors from "./DataMentor";

const MentorCard = ({ name, image, position, company }) => (
  <a
    href={`/mentor/${name.toLowerCase()}/?ref=home_slider&source=featured`}
    className="mx-2 inline-block w-[200px] h-[200px] align-bottom"
    target="_blank"
  >
    <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
      <img
        className="block w-16 h-16 rounded-full mx-auto"
        src={image}
        alt={name}
      />
      <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
        <h3 className="font-bold text-navy-900 whitespace-nowrap">{name}</h3>
        <span className="text-gray-400 text-sm mt-2" lang="en">
          {position} at {company}
        </span>
      </div>
    </div>
  </a>
);
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
            <span className="font-bold text-teal-600" id="typed-headline">
              Career
            </span>
            <br className="hidden sm:block" />
            <span className="font-bold text-navy-900 -ml-2">Mentorship</span>
          </h1>
          <h1 className="hidden">1-on-1 Mentorship</h1>
        </div>
        <div className="flex flex-col md:flex-row mx-4 md:m-auto max-w-screen-md mt-4">
          <div className="w-full">
            <form
              action="/mentor/browse/"
              method="get"
              className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row relative w-full text-center text-navy-900 drop-shadow-2xl bg-white p-4 md:py-4 md:pl-8 md:pr-3 md:m-auto md:max-w-2xl lg:max-w-none rounded-xl"
            >
              <div className="flex w-full">
                <input
                  type="text"
                  name="search"
                  placeholder="Search by company, skills or role"
                  autoComplete="off"
                  tabIndex={0}
                  id="autocomplete"
                  className="w-full text-base p-2 md:pl-4 font-medium md:text-lg border-0 placeholder-opacity-80 placeholder-mc-shade-dark text-navy-900 outline-none"
                />
              </div>
              <div>
                <button type="submit" className="blue-btn whitespace-nowrap">
                  Search mentors
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* static data */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
