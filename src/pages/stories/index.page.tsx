import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { Story } from '@src/types/stories';
import { StorySection } from '@src/components/modules';
import { getAllStories } from '@src/libs/stories';

export async function getStaticProps() {
  const stories = getAllStories();
  return {
    props: {
      stories,
    },
  };
}

interface StoryPageProps {
  stories: Story[];
}

const BlogPage = ({ stories }) => {
  return (
    <>
      <SeoMeta
        description={'Stories - Roby Setiawan'}
        title={'Roby Setiawan - Software Engineer'}
      />
      <HomePageLayout>
        <Animate>
          <StorySection stories={stories} />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default BlogPage;
