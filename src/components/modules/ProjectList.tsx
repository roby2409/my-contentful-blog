import { ProjectType } from '@src/types/projects';
import Image from 'next/image';
import NextImage from 'next/image';
import React, { useState } from 'react';

interface ProjectListProps {
  project: ProjectType;
}

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <p>
      {project.img ? (
        <Image
          loading="lazy"
          src={`/images/projects/${project.img}`}
          width={0}
          height={0}
          sizes="100vw"
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
        <h3 className="text-lg font-semibold text-gray-800 duration-150 group-hover:text-indigo-600">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600 duration-150 group-hover:text-gray-800">
          {project.description}
        </p>
      </div>
    </p>
  );
};

export default ProjectList;
