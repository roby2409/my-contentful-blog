import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { Heading, Text } from '@src/components/design-system';
import { DocSupportSection } from '@src/components/modules';

const DocSupports: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={'Document support - Roby Setiawan'}
        title={'Roby Setiawan - Software Engineer'}
      />
      <HomePageLayout>
        <Animate>
          <DocSupportSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default DocSupports;
