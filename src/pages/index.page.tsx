import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import {
  MainSection,
  AboutSection,
  ExperienceSection,
} from '@src/components/modules';
import { Animate, SeoMeta } from '@src/components/design-system/utils';


const Home = () => {
  return (
    <>
      <SeoMeta description={'Home - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
      <HomePageLayout>
        <Animate>
          <MainSection />
          <AboutSection short={true} />
          <ExperienceSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Home;
