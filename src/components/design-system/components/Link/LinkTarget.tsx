import Link from 'next/link';

interface LinkProps {
  href?: string | undefined;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  title?: string | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

const LinkTarget: React.FC<LinkProps> = ({ href, style, title, target, children, onClick }) => {
  return (
    <Link
      href={href || ''}
      title={title}
      className={`dark:ring-offset-black focus:ring-tael-600 text-teal-600 dark:text-teal-400" inline-flex w-fit
      cursor-pointer items-center rounded font-bold outline-none duration-300 hover:underline focus:ring-4 focus:ring-offset-2`}
      onClick={onClick}
      style={style}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkTarget;
