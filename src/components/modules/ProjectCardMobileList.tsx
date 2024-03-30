import { projectMobiles } from '@src/data/projects';
import { ProjectType } from '@src/types/projects';
import Image from 'next/image';
import NextImage from 'next/image';
import React, { useState } from 'react';

interface ProjectCardMobileListProps {
  project: ProjectType;
}

const ProjectCardMobileList: React.FC<ProjectCardMobileListProps> = ({ project }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="grid gap-2 p-8">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-100">
            {project.name}
          </h3>
          <p className="text-sm tracking-tight text-gray-800 dark:text-gray-100">
            {project.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {project.imgMobile?.map((img, index) => (
            <div key={index}>
              {/* <img className="h-auto max-w-full rounded-lg" src={`/images/projects/${img}`} alt="" /> */}
              <Image
                loading="lazy"
                src={`/images/projects/mobile/${project.img}/${img}`}
                width={100}
                height={100}
                sizes="30vw"
                className={`
        h-auto max-w-full rounded-lg duration-700 ease-in-out group-hover:opacity-75 ${
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        })`}
                onLoadingComplete={() => setLoading(false)}
                style={{ width: '100%', height: 'auto' }}
                alt={project.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobileList;
