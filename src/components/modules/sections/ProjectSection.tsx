import React from 'react';
import { projectMobiles, projectWebs } from '@src/data/projects';
import { Heading, Text } from '@src/components/design-system';
import { ProjectCardMobileList, ProjectCardWebList } from '@src/components/modules';

export default function ProjectSection() {
  return (
    <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">Recent Project 👨🏻‍💻</Heading>
      <div className="prose mt-5 max-w-none text-[#10161a] dark:text-gray-100">
        <Text>This page contains a list of applications I have worked on.</Text>
        <section className="py-2">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h3 className="text-center font-bold tracking-tight text-gray-800 dark:text-gray-100">
              This is list my project web.
            </h3>
            <hr />
            <ul className="mt-16 grid list-none gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {projectWebs?.map((project, index) => (
                <li className="group mx-auto w-full sm:max-w-sm" key={index}>
                  <ProjectCardWebList project={project} key={index} />
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="text-center font-bold tracking-tight text-gray-800 dark:text-gray-100">
              This is list my project mobile.
            </h2>
            <hr />
            <ul className="mt-16 grid list-none gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {projectMobiles?.map((project, index) => (
                <li className="group mx-auto w-full sm:max-w-sm" key={index}>
                  <ProjectCardMobileList project={project} key={index} />
                </li>
              ))}
            </ul>
          </div>
          <hr />
        </section>
      </div>
    </section>
  );
}
