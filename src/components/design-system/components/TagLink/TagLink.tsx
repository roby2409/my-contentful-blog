import Link from 'next/link';

interface TagLinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

const TagLink: React.FC<TagLinkProps> = ({ href, children, style, target, onClick }) => {
  return (
    <Link
      className={`dark:ring-offset-black dark:text-gray-100 ring-teal-400 inline-flex w-fit items-center rounded font-bold  text-[#10161a]
      outline-none duration-300 hover:underline focus:ring-4 focus:ring-offset-2`}
      style={style}
      target={target}
      href={href || ''}
      onClick={onClick}
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};

export default TagLink;
