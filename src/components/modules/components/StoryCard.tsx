import { convertDateFormat } from '@src/libs/date';
import { Story } from '@src/types/stories';
import Link from 'next/link';
import React from 'react';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <React.Fragment>
      <div className="mt-10 flex flex-col gap-16">
        <article className="border-teal-100 hover:bg-gray-100 bg-gray-50 dark:border-teal-900 group  my-2 flex cursor-pointer flex-col items-start rounded-lg border p-4 group-hover:scale-100 group-hover:opacity-100 dark:bg-[#10161a]/100 hover:dark:bg-[#10161a]/60">
          <h3 className="text-gray-800 dark:text-gray-100 text-base font-semibold tracking-tight">
            <Link
              href={`/stories/${story.slug}`}
              className="dark:text-gray-100 text-[#10161a] no-underline"
            >
              <span className="z-10 text-xl">{story.frontMatter.title}</span>
            </Link>
          </h3>
          <time className="text-gray-400 dark:text-gray-100 order-first mb-3 flex items-center text-sm">
            {convertDateFormat(story.frontMatter.date)}
          </time>
          <p className="text-gray-600 dark:text-gray-100 mt-2 text-sm">
            {story.frontMatter.description}
          </p>
          <Link
            className="text-teal-600 dark:text-teal-400 mt-4 flex items-center text-sm font-medium no-underline hover:underline"
            href={`/stories/${story.slug}`}
          >
            <span>Read article</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="stroke-current ml-1 h-4 w-4"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </article>
      </div>
    </React.Fragment>
  );
};

export default StoryCard;
