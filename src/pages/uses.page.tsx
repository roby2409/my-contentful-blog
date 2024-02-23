import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { Heading, Text } from '@src/components/design-system';
import { UsesSection } from '@src/components/modules';

const Uses: NextPage = () => {
  return (
    <>
      <SeoMeta description={'Uses - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
      <HomePageLayout>
        <Animate>
          <UsesSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Uses;
