import { ProjectType } from '@src/types/projects';
import Image from 'next/image';
import NextImage from 'next/image';
import React, { useState } from 'react';

interface ProjectCardWebListProps {
  project: ProjectType;
}

const ProjectCardWebList: React.FC<ProjectCardWebListProps> = ({ project }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      {project.img ? (
        <Image
          loading="lazy"
          src={`/images/projects/${project.img}`}
          width={100}
          height={100}
          sizes="30vw"
          className={`
        duration-700 ease-in-out group-hover:opacity-75 ${
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        })`}
          onLoadingComplete={() => setLoading(false)}
          style={{ width: '100%', height: 'auto' }}
          alt={project.name}
        />
      ) : (
        <img
          src={`https://www.shutterstock.com/image-photo/word-disclosure-composed-wooden-letter-260nw-1316887508.jpg`}
          loading="lazy"
          alt={`no image`}
          className="w-full rounded-lg"
        />
      )}
      <div className="mt-3 space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-100">
          {project.name}
        </h3>
        <p className="text-sm tracking-tight text-gray-800 dark:text-gray-100">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCardWebList;
