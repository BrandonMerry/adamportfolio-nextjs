import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import project1 from '../public/assets/projects/project1.jpg';
// import project2 from '../public/assets/projects/project2.jpg'
// import project3 from '../public/assets/projects/project3.jpg'
// import project4 from '../public/assets/projects/project4.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#145f9f]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Project #1"
            backgroundImg={project1}
            projectUrl="/Project1"
            tech="React JS"
          />
          <ProjectItem
            title="Project #2"
            backgroundImg={project2}
            projectUrl="/Project2"
            tech="React JS"
          />
          <ProjectItem
            title="Project #3"
            backgroundImg={project3}
            projectUrl="/Project3"
            tech="React JS"
          />
          <ProjectItem
            title="Project #4"
            backgroundImg={project4}
            projectUrl="/Project4"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
