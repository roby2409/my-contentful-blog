import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { CtfImage } from '../contentful';
import { PageBlogPostFieldsFragment } from '@src/libs/__generated/sdk';
import { Span } from '@src/components/design-system/components/Span';

interface ArticleAuthorProps {
  article: PageBlogPostFieldsFragment;
}

export const ArticleAuthor = ({ article }: ArticleAuthorProps) => {
  const { author } = article;
  const inspectorProps = useContentfulInspectorMode({ entryId: author?.sys.id });

  return (
    <div className="flex items-center">
      <div
        className="border-blue500 mr-2 overflow-hidden rounded-full border"
        {...inspectorProps({ fieldId: 'avatar' })}
      >
        {author?.avatar && (
          <CtfImage
            nextImageProps={{
              width: 28,
              height: 28,
              sizes: undefined,
              placeholder: undefined,
            }}
            {...author.avatar}
          />
        )}
      </div>
      <Span className="text-gray600 text-xs leading-none" {...inspectorProps({ fieldId: 'name' })}>
        {author?.name}
      </Span>
    </div>
  );
};
