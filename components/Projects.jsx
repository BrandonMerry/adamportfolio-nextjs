import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-4 ">
        <p className="text-xl py-4 tracking-widest uppercase text-[#145f9f]">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card w-[85%] bg-base-100 bg-white shadow-xl px-6 py-6 rounded-xl">
            <div className="card-body">
              <h2 className="card-title py-2 text-xl">
                Bicycle Shop Web Application
              </h2>
              <p className="py-4 text-xs">
                Collaboratively implemented a web application for finding
                bicycle stores in clients area. Delivered fully functional
                application, per specifications, in specified time frame.
                Successful implementation of Google’s API, Angular framework,
                Node,js, and Firebase
              </p>
              <div className="card-actions justify-end pt-2">
                <button className="w-full bg-gradient-to-r from-[#145f9f] to-[#145FD6]  text-white">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[85%]  bg-base-100 bg-white shadow-xl px-6 py-6 rounded-xl">
            <div className="card-body">
              <h2 className="card-title py-2 text-xl">
                Hotel Management Web Application
              </h2>
              <p className="py-4 text-xs">
                Collaboratively implemented a web application to book hotel
                rooms using version control. Delivered fully functional
                application, per specifications, in specified time frame.
                Successful implementation of frontend and backend features using
                12 factor methodology.
              </p>
              <div className="card-actions justify-end pt-2">
                <button className="w-full bg-gradient-to-r from-[#145f9f] to-[#145FD6]  text-white">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[85%]  bg-base-100 bg-white shadow-xl px-6 py-6 rounded-xl">
            <div className="card-body">
              <h2 className="card-title py-2 text-xl">Tetris</h2>
              <p className="py-4 text-xs">
                Built Tetris in fully distributed/asynchronous fashion using C#,
                Perforce, and Slack. Pre-COVID, built full game in entirely
                asynchronous/distributed fashion. Delivered fully working game
                within two (2) weeks.
              </p>
              <div className="card-actions justify-end pt-2">
                <button className="w-full bg-gradient-to-r from-[#145f9f] to-[#145FD6]  text-white">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[85%]  bg-base-100 bg-white shadow-xl px-6 py-6 rounded-xl">
            <div className="card-body">
              <h2 className="card-title py-2 text-xl">Hack The Box Academy</h2>
              <p className="py-4 text-xs">
                HTB Academy is a University for Hackers where our users can
                learn step-by-step the cybersecurity theory. All the way from
                guided to exploratory learning, learn how to hack and develop
                the hacking mindset that will enable you to assess and create
                secure systems.
              </p>
              <div className="card-actions justify-end pt-2">
                <button className="w-full bg-gradient-to-r from-[#145f9f] to-[#145FD6]  text-white">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
