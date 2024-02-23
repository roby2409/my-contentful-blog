import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { ActivitySection } from '@src/components/modules';
import { HomePageLayout } from '@src/layouts/HomePageLayout';

export default function ServerErrorPage() {
  return (
    <>
      <SeoMeta
        description={'Activity - Roby Setiawan'}
        title={'Roby Setiawan - Software Engineer'}
      />
      <HomePageLayout>
        <Animate>
          <ActivitySection />
        </Animate>
      </HomePageLayout>
    </>
  );
}
