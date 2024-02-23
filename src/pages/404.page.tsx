import { Animate, SeoMeta } from '@src/components/design-system/utils';
import { ErrorSection } from '@src//components/modules';
import React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <Animate>
        <SeoMeta description={'404 - Roby Setiawan'} title={'Roby Setiawan - Software Engineer'} />
        <ErrorSection heading={'404 - Not Found'} text={"Oops! We couldn't find this page."} />
      </Animate>
    </>
  );
}
