import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { dark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { ArticleImage } from '../article';
import { ComponentRichImage } from '@src/libs/__generated/sdk';
import { useTheme } from '@src/context/ThemeContext';
import { getPlainTextFromHeader } from '@src/pages/utils/formatingHelper';
import slugify from 'slugify';

export type EmbeddedEntryType = ComponentRichImage | null;

export interface ContentfulRichTextInterface {
  json: Document;
  links?:
    | {
        entries: {
          block: Array<EmbeddedEntryType>;
        };
      }
    | any;
}

export const EmbeddedEntry = (entry: EmbeddedEntryType) => {
  switch (entry?.__typename) {
    case 'ComponentRichImage':
      return <ArticleImage image={entry} />;
    default:
      return null;
  }
};

export const contentfulBaseRichTextOptions = ({ links }: ContentfulRichTextInterface): Options => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const entry = links?.entries?.block?.find(
        (item: EmbeddedEntryType) => item?.sys?.id === node.data.target.sys.id,
      );

      if (!entry) return null;

      return <EmbeddedEntry {...entry} />;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      const plainText = getPlainTextFromHeader(node.content);

      return <h2 id={slugify(plainText)}>{children}</h2>;
    },
  },
});

export const CtfRichText = ({ json, links }: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });
  const { theme } = useTheme();

  return (
    <article className="prose prose-sm dark:prose-invert max-w-none">
      {documentToReactComponents(json, baseOptions)}
    </article>
  );
};
