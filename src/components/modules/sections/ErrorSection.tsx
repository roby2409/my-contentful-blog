import React from 'react';
import { LinkTarget, TagLink, Text } from '@src/components/design-system';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

interface ErrorSectionProps {
  heading: string;
  text: string;
  location?: string;
}

export default function ErrorSection({ heading, text, location }: ErrorSectionProps) {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="dark:text-gray-100 text-center text-4xl font-bold tracking-tight">
        {heading}
      </h1>
      <Text style={{ marginBottom: '1rem' }}>{text}</Text>
      <TagLink
        href={location ? location : ''}
        onClick={() => {
          !location && router.back();
        }}
      >
        <FiArrowLeft className="mr-1 text-lg" /> Go back
      </TagLink>
    </div>
  );
}
