import React from 'react';
import { projects } from '@src/data/projects';
import { Heading, Text } from '@src/components/design-system';
import { ProjectList } from '@src/components/modules';

export default function ProjectSection() {
  return (
    <section className="mx-auto -mt-12 mb-12 flex h-full flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">Recent Project 👨🏻‍💻</Heading>
      <div className="prose mt-5 max-w-none text-[#10161a] dark:text-gray-100">
        <Text>This page contains a list of applications I have worked on.</Text>
        <div className="space-y-8">
          {projects?.map((project, index) => (
            <ProjectList project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
