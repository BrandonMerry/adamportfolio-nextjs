import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-6"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#145f9f]">
            About Me
          </p>

          <p className="py-2 text-gray-600">
            I’m a former Caseworker, ESL Teacher, and global nomad looking to
            help people and companies solve complex and dynamic problems.
            Between my soft skills from working in the humanities and traveling
            to my technical skills in IT, programming, and networking there
            isn’t a problem I can’t solve!!
          </p>
          <div className="flex flex-col">
            <h4 className="py-2 text-gray-600 ">Previous Work</h4>
            <span className="py-1">
              Systems Design Engineer Intern - T-Mobile
            </span>
            <span className="py-1">
              IT Specialist - Chicago-Malcolm X College
            </span>
            <span className="py-1">
              Course Online Technician/ IT Support - DePaul University
            </span>
            <span className="py-1">
              Software Development Intern - STRUT Learning
            </span>
          </div>
          <div class="block py-4">
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              AWS Practitioner
            </span>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Comptia Network+
            </span>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Comptia Security+
            </span>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              CCNA
            </span>
          </div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        {/* <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
