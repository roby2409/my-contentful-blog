// Next.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { DropDownNav, ToogleNav } from '@src/components/modules';
import { NavItemType } from '@src/types/navbar';

const NavbarSection: React.FC = () => {
  const navlinks: NavItemType[] = [
    { id: 1, text: 'Me', to: '/', dropdown: 'Me' },
    { id: 2, text: 'About', to: '/about', dropdown: 'About' },
    { id: 3, text: 'Projects', to: '/projects', dropdown: 'Projects' },
    { id: 4, text: 'My Stories', to: '/stories', dropdown: 'Story' },
    { id: 5, text: 'Uses', to: '/uses', dropdown: 'Uses' },
    { id: 6, text: 'Activity', to: '/activity', dropdown: 'Activity' },
    { id: 7, text: 'Blog', to: '/blog', dropdown: 'Blog' },
    { id: 8, text: 'Download Document support', to: '/docsupport', dropdown: 'Document support' },
  ];

  const router = useRouter();

  return (
    <nav className="fixed top-8 z-10 mb-12 flex h-14 w-[80%] items-center justify-between rounded-lg border border-stone-200 bg-gray-100 bg-gray-100/50 px-6 backdrop-blur-md md:w-[80rem] dark:border-stone-900 dark:bg-[#10161a]/50">
      <div className="flex lg:hidden">
        <DropDownNav items={navlinks} />
      </div>
      <div className="hidden lg:flex">
        {navlinks?.map(nav => (
          <LinkTag
            key={nav.id}
            className={`${router.pathname === nav.to && 'bg-gray-300 dark:bg-gray-800'}`}
            to={nav.to}
          >
            {nav.text}
          </LinkTag>
        ))}
      </div>
      <ToogleNav />
    </nav>
  );
};

export default NavbarSection;

const LinkTag = ({
  children,
  to,
  className,
}: {
  children: React.ReactNode;
  to: string;
  className?: string | undefined;
}) => {
  return (
    <Link
      className={`mr-8 rounded-lg p-2 text-sm text-gray-600 outline-none
      ring-teal-400 duration-300 hover:bg-gray-100 focus:ring-4 focus:ring-offset-2 dark:text-gray-300 dark:ring-offset-black dark:hover:bg-gray-800 ${className}`}
      href={to}
    >
      {children}
    </Link>
  );
};
