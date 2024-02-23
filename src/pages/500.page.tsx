import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { ErrorSection } from 'src/components/modules';
import React from 'react';

export default function ServerErrorPage() {
  return (
    <>
      <Animate>
        <SeoMeta description={'500 - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
        <ErrorSection
          heading={'500 - Internal Server Error'}
          text={'Oops! Internal Server Error.'}
        />
      </Animate>
    </>
  );
}
