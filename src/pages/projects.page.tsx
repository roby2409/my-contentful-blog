import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import ProjectSection from '@src/components/modules/sections/ProjectSection';

const Projects: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={'Project - Roby Setiawan'}
        title={'Roby Setiawan - Software Engineer'}
      />
      <HomePageLayout>
        <Animate>
          <ProjectSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Projects;
