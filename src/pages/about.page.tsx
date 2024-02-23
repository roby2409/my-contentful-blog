import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { AboutSection, ExperienceSection } from '@src/components/modules';
import { Animate, SeoMeta } from '@src/components/design-system/utils';

const About: NextPage = () => {
  return (
    <>
      <SeoMeta description={'About - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
      <HomePageLayout>
        <Animate>
          <AboutSection short={false} />
          <ExperienceSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default About;
