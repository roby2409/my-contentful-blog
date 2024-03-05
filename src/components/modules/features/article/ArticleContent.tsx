import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { CtfRichText } from '../contentful';
import { PageBlogPostFieldsFragment } from '@src/libs/__generated/sdk';
import { Container } from '../../shared/container/Container';

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { content } = article;
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  return (
    <Container className="w-[100%] md:w-[60rem] ">
      <div {...inspectorProps({ fieldId: 'content' })}>
        <CtfRichText json={content?.json} links={content?.links} />
      </div>
    </Container>
  );
};
