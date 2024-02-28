import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import {
  MainSection,
  AboutSection,
  ExperienceSection,
  StorySection,
} from '@src/components/modules';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { Story } from '@src/types/stories';
import { getAllStories } from '@src/libs/stories';

export async function getStaticProps() {
  const stories = getAllStories();
  return {
    props: {
      stories,
    },
  };
}

interface HomePageProps {
  stories: Story[];
}

const Home: NextPage<HomePageProps> = ({ stories }) => {
  return (
    <>
      <SeoMeta description={'Home - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
      <HomePageLayout>
        <Animate>
          <MainSection />
          <AboutSection short={true} />
          <ExperienceSection />
          <StorySection stories={stories} isLimited={true} />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Home;
