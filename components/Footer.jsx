import React from "react";
import Link from "next/link";


export default function footer() {
  return (
    <footer className="relative p-10 md:text-left mt-1 w-full">
      <div className="mx-auto border-y-2 border-gray-600 md:text-left">
        <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 pl-4 gap-8 lg:justify-around">
          <div className="justify-between mt-2">
            <p className="
              uppercase
              font-semibold
              mb-4
              text-lg
              md:text-xl
              flex
              justify-center
              md:justify-start
              ">
              About Us
            </p>
            <p className="first-line:uppercase first-line:tracking-wide first-letter:text-lg lg:first-letter:text-3xl first-letter:font-bold first-letter:text-[#6495ed] first-letter:mr-1 first-letter-left text-sm lg:text-lg">
              Bryan&apos;s media is a Nigeria blog site that showcases trendy News on Entertainment, Education, Technology, Sport, and Web-development.
              Its contents are well authenticated and curated before publishing to avoid the spread of rumors.
            </p>
          </div>

      <div className="">
        <p className="uppercase md:text-xl text-lg md:font-semibold mb-4 flex justify-center md:justify-start">
          Contact
        </p>
        <p className="flex items-center text-base md:text-base justify-center md:justify-start mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house-door w-4 mr-4" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
          </svg>
          Kwara State, Nigeria.
        </p>
        <p className="flex items-center text-base md:text-base justify-center md:justify-start mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope w-4 mr-4" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          thomasstephen252@gmail.com
        </p>
      </div>

      <div className="">
        <p className="font-normal flex justify-center mx-auto uppercase text-base md:font-semibold md:text-lg mb-4">Get connected with us:</p>

       

        <p className="flex mr-8 items-center lg:text-lg justify-center md:justify-start mb-4">
          <Link href="https://twitter.com/ti_stephen" target="_blank" rel='noopener noreferrer' passHref>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter w-4 mr-4 lg:text-lg hover:text-[#6495ed]" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
          </Link> Twitter
        </p>

      </div>
    </div>
  </div>

  <div className="mt-4">
    {/* <span>© 2022 Copyright:</span> */}
    <p className=" ml-2 font-normal inline-block text-base">
      © 2022 Copyright: Bryan&apos;s Media <Link className='underline' href={`/privacy/privacyTerms`} passHref>Privacy &amp; terms</Link>
    </p>
    <p className=" ml-2 md:float-right md:float-right flex justify-center font-normal mt:10 text-sm md:font-semibold">Powered by AbobTech </p>
  </div>

</footer>
  )
}
