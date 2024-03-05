import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { twMerge } from 'tailwind-merge';

import { ArticleAuthor } from './ArticleAuthor';
import { ArticleLabel } from './ArticleLabel';
import { CtfImage } from '../contentful';
import { FormatDate } from '../../shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/libs/__generated/sdk';
import { Heading, Text } from '@src/components/design-system';

interface ArticleHeroProps {
  article: PageBlogPostFieldsFragment;
  isFeatured?: boolean;
  isReversedLayout?: boolean;
}
export const ArticleHero = ({
  article,
  isFeatured,
  isReversedLayout = false,
}: ArticleHeroProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  const { title, shortDescription, publishedDate } = article;

  return (
    <div
      className={twMerge(
        `border-gray300 flex flex-col overflow-hidden rounded-2xl border shadow-lg`,
        isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
    >
      <div className="flex-1 basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center px-4 py-6 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-wrap items-center">
          <ArticleAuthor article={article} />
          {isFeatured && (
            <ArticleLabel
              className={twMerge(
                'ml-auto pl-2 lg:absolute lg:top-8 xl:top-12',
                isReversedLayout ? 'lg:left-6 xl:left-12' : 'lg:right-6 xl:right-12',
              )}
            >
              featured
            </ArticleLabel>
          )}
          <div
            className={twMerge(
              'text-gray600 ml-auto hidden pl-2 text-xs',
              isReversedLayout ? 'lg:block' : '',
            )}
            {...inspectorProps({ fieldId: 'publishedDate' })}
          >
            <FormatDate date={publishedDate} />
          </div>
        </div>
        <Heading {...inspectorProps({ fieldId: 'title' })}>{title}</Heading>
        {shortDescription && (
          <Text className="mt-2" {...inspectorProps({ fieldId: 'shortDescription' })}>
            {shortDescription}
          </Text>
        )}
        <div
          className={twMerge('text-gray600 mt-2 text-xs', isReversedLayout ? 'lg:hidden' : '')}
          {...inspectorProps({ fieldId: 'publishedDate' })}
        >
          <FormatDate date={publishedDate} />
        </div>
      </div>
    </div>
  );
};
