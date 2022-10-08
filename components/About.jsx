import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#145f9f]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            ---- About Me ----- + technolgogies you know
          </p>
          <p className="py-2 text-gray-600">-- Previous work done.---</p>
          <div class="block py-4">
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              List
            </span>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Skils
            </span>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Certs
            </span>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Here
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
