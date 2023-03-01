import React from "react";
import 'animate.css';

export const About = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"></a>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none animate__animated animate__bounceInLeft">
            About_us
          </h2>
          <p className="text-base text-gray-700 md:text-lg sm:px-4 animate__animated animate__bounceInRight">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 animate__animated animate__bounceInLeft">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Why is{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  E-Learn.{" "}
                </span>
                <br className="hidden md:block" />
                your next{" "}
                <span className="inline-block text-gray-900">destination</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssgU3zzx8ArIk3TvXqJa-Vs9MB9Fg8QDDh4R6aqMfB04I7S0-lgoAZAEgsfXJvzWEj7s&usqp=CAU"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://dolby.io/wp-content/uploads/2022/07/video-call-illo-720x550-1.png"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://media.istockphoto.com/id/1225079472/photo/laptop-screen-view-six-multiethnic-people-involved-in-group-videocall.jpg?s=612x612&w=0&k=20&c=NiXuOug5bfQ_niz_xY6xS0nSIXsptofYG4b0rc-5_7o="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
          <div className="grid gap-8 lg:col-span-2">
            <div>
              <p className="mb-2 text-lg font-bold">Old man</p>
              <p className="text-gray-700">
                An old man lived in the village. He was one of the most
                unfortunate people in the world. The whole village was tired of
                him, he was always gloomy, he constantly complained.
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">The Wise Man</p>
              <p className="text-gray-700">
                People have been coming to the wise man, complaining about the
                same problems every time. One day he told them a joke and
                everyone roared in laughter.
              </p>
            </div>
          </div>
          <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Funds Raised
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  $84 000 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Products
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  52
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Downloads
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  186M
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Users
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  86K
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Installations
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  917 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Subscribers
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  213K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative"></span>
              </span>{" "}
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  The quick, brown fox jumps over a lazy dog?
                </p>
                <p className="text-gray-700">
                  Space, the final frontier. These are the voyages of the
                  Starship Enterprise. Its five-year mission: to explore strange
                  new worlds.
                  <br />
                  <br />
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  The first mate and his Skipper too will do?
                </p>
                <p className="text-gray-700">
                  Well, the way they make shows is, they make one show. That
                  show's called a pilot.
                  <br />
                  <br />
                  Then they show that show to the people who make shows, and on
                  the strength of that one show they decide if they're going to
                  make more shows. Some pilots get picked and become television
                  programs.Some don't, become nothing. She starred in one of the
                  ones that became nothing.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  Is the Space Pope reptilian!?
                </p>
                <p className="text-gray-700">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear. I didn't even know we were calling
                  him Big Bear.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  How much money you got on you?
                </p>
                <p className="text-gray-700">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest.
                  <br />
                  <br />
                  Michael Knight a young loner on a crusade to champion the
                  cause of the innocent. The helpless. The powerless in a world
                  of criminals who operate above the law. Here he comes Here
                  comes Speed Racer. He's a demon on wheels.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  Galaxies Orion's sword globular star cluster?
                </p>
                <p className="text-gray-700">
                  A business big enough that it could be listed on the NASDAQ
                  goes belly up. Disappears!
                  <br />
                  <br />
                  It ceases to exist without me. No, you clearly don't know who
                  you're talking to, so let me clue you in.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  When has justice ever been as simple as a rule book?
                </p>
                <p className="text-gray-700">
                  This is not about revenge. This is about justice. A lot of
                  things can change in twelve years, Admiral. Well, that's
                  certainly good to know. About four years. I got tired of
                  hearing how young I looked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
