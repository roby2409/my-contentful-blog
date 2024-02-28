import { Heading, LinkTarget, Text } from '@src/components/design-system';
import { Story } from '@src/types/stories';
import React from 'react';
import { StoryCard } from '@src/components/modules';

interface StorySectionProps {
  stories: Story[];
  isLimited?: boolean;
}

const StorySection: React.FC<StorySectionProps> = ({ stories, isLimited = false }) => {
  const limitedStories = isLimited ? stories.slice(0, 5) : stories;

  return (
    <section className="mx-auto -mt-12 h-full mb-12 flex flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">{isLimited ? 'Latest Blog ✏️' : 'Blog ✏️'}</Heading>
      <div className="dark:text-gray-100 prose mt-5 max-w-none text-[#10161a]">
        <Text>
          Tweets in the form of my stories, experiences and knowledge that I can share.{' '}
          {isLimited && <LinkTarget href="/stories">See More Blog</LinkTarget>}
          {''}
        </Text>

        <div className="space-y-8">
          {limitedStories?.map((story, index) => (
            <StoryCard story={story} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
