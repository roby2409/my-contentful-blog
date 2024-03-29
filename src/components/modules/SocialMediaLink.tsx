import Link from 'next/link';

import { links } from '@src/data/links';

const SocialMediaLink: React.FC = () => {
  return (
    <div className="flex">
      {links?.map(link => (
        <LinkWrapper key={link.id} href={link.href} title={link.title}>
          {link.icon}
        </LinkWrapper>
      ))}
    </div>
  );
};

interface LinkWrapperProps {
  children?: React.ReactNode;
  title: string;
  href: string;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ href, children, title }) => {
  return (
    <Link
      href={href}
      className={`mr-6 cursor-pointer rounded text-2xl text-gray-600 outline-none
      ring-teal-400 duration-300 hover:scale-110 hover:text-gray-800 focus:ring-4 focus:ring-offset-4 dark:text-gray-300
      dark:ring-offset-black dark:hover:text-gray-100`}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};

export default SocialMediaLink;
