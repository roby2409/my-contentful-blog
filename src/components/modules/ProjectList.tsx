import { ProjectType } from '@src/types/projects';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProjectListProps {
  project: ProjectType;
}

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-teal-100 bg-gray-100/50 p-3 no-underline shadow-lg transition duration-300 hover:shadow-xl dark:border-teal-900 dark:bg-[#10161a]/50"
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-[#10161a] hover:underline dark:text-gray-100">
          {project.name}
        </h3>
        <p className="text-sm leading-normal text-[#10161a] dark:text-gray-100">
          {project.description}
        </p>
        <div className="mt-0 w-full rounded-md bg-gray-50  md:w-[38.5rem]">
          {project.img && (
            <Image
              loading="lazy"
              src={`/images/projects/${project.img}`}
              width={0}
              height={0}
              sizes="100vw"
              className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
              onLoadingComplete={() => setLoading(false)}
              style={{ width: '100%', height: 'auto' }}
              alt={project.name}
            />
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectList;
