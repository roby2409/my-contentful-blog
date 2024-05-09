import { NextPage } from 'next';
import { HomePageLayout } from '@src/layouts/HomePageLayout';
import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { Heading, Text } from '@src/components/design-system';
import { DocProfileSection } from '@src/components/modules';

const DocProfiles: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={'Dokument pendukung - Roby Setiawan'}
        title={'Roby Setiawan - Software Engineer'}
      />
      <HomePageLayout>
        <Animate>
          <DocProfileSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default DocProfiles;
