import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Adam | Resume</title>
        <meta
          name="description"
          content="I&#39;m a tech professional with a diverse skillset, and
            multicultural background looking to make an impact"
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Adam Sadowski</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/adam-sadowski-75a796192/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/ASadRam"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Software
              Engineering
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Software Engineering</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I’m a former Caseworker, ESL Teacher, and global nomad looking to help
          people and companies solve complex and dynamic problems. Between my
          soft skills from working in the humanities and traveling to my
          technical skills in IT, programming, and networking there isn’t a
          problem I can’t solve!!
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Python
            <span className="px-2">|</span> Java
            <span className="px-2">|</span>Javascript/Typescript
            <span className="px-2">|</span>Swift
            <span className="px-2">|</span>C#
            <span className="px-2">|</span>C/C++
            <span className="px-2">|</span>SQL/MySQL
            <span className="px-2">|</span>SPSS
            <span className="px-2">|</span>Fullstack
            <span className="px-2">|</span>Mobile Development
            <span className="px-2">|</span> Databases
            <span className="px-2">|</span> NetSupport
            <span className="px-2">|</span> Active Directory
            <span className="px-2">|</span> Networks
            <span className="px-2">|</span> Virtual Machines
            <span className="px-2">|</span> Cloud Computing
            <span className="px-2">|</span> NIST Frameworks
            <span className="px-2">|</span> Cryptology
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
          <p className="py-2">
            <span className="font-bold">Comptia</span>
            <span className="px-2">|</span> Network+ and Security+
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">T-Mobile</span>
            <span className="px-2">|</span> Seattle, WA
          </p>
          <p className="py-1 italic">
            Systems Design Engineer Intern (06/22 - 09/22)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Automated retrieval of metrics and creation of data charts, thus
              streamlining work flow.
            </li>
            <li>
              Ensured 4G and 5G telecommunication systems stayed within
              operational KPI metrics.
            </li>
            <li>
              Collaborated across functional teams both internally and
              externally to deliver timely results.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Malcolm X Colleg</span>
            <span className="px-2">|</span>Chicago, IL
          </p>
          <p className="py-1 italic"> IT Specialist (09/21 - 05/22)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided quality Tier 1 technology support to 8,600
              students/faculty/staff campus wide.
            </li>
            <li>
              Imaged, configured, networked, and maintained all hardware and
              software.
            </li>
            <li>
              Managed special projects across technical functionalities with
              other departments.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">DePaul University</span>
            <span className="px-2">|</span>Chicago, IL
          </p>
          <p className="py-1 italic"> IT Support (06/21 - 09/21)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Deployed and maintained hardware/software for online course
              modality for entire department
            </li>
            <li>
              Trouble shot classroom equipment for 50+ classrooms in realtime as
              any issues arose.
            </li>
            <li>Assisted with other IT related projects as need.</li>
          </ul>
        </div>
        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Media Kids </span>
            <span className="px-2">|</span>Ubon Ratchathani, Thailand
          </p>
          <p className="py-1 italic">
            Ubon Ratchathani, Thailand (11/16 - 02/18)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Prepared/delivered lessons on various topics to students aged
              14-16 in groups of 40-50.
            </li>
            <li>Lead school sponsored camps and workshops.</li>
            <li>Assisted with administrative level projects as needed.</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">IL. Dept. of Human Services</span>
            <span className="px-2">|</span>Chicago, IL
          </p>
          <p className="py-1 italic">
            Human Services Caseworker (04/14 - 07/16)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Performed intake and case maintenance in an office which received
              10,000K+ daily calls.
            </li>
            <li>Maintained highest level of HIPAA integrity and privacy.</li>
            <li>
              Worked with diverse population of all socio-economic statuses.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
