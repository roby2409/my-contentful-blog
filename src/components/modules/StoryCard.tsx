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
        <article className="group my-2 flex cursor-pointer flex-col  items-start rounded-lg border border-teal-100 bg-gray-50 p-4 hover:bg-gray-100 group-hover:scale-100 group-hover:opacity-100 dark:border-teal-900 dark:bg-[#10161a]/100 hover:dark:bg-[#10161a]/60">
          <h3 className="text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100">
            <Link
              href={`/stories/${story.slug}`}
              className="text-[#10161a] no-underline dark:text-gray-100"
            >
              <span className="z-10 text-xl">{story.frontMatter.title}</span>
            </Link>
          </h3>
          <time className="order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-100">
            {convertDateFormat(story.frontMatter.date)}
          </time>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
            {story.frontMatter.description}
          </p>
          <Link
            className="mt-4 flex items-center text-sm font-medium text-teal-600 no-underline hover:underline dark:text-teal-400"
            href={`/stories/${story.slug}`}
          >
            <span>Read article</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
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
