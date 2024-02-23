import Link from 'next/link';
import React from 'react';

interface ButtonLinkProps {
  target: React.HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
  href: string;
}

export default function ButtonLink({ target, children, href }: ButtonLinkProps) {
  return (
    <Link
      className="text-gray-800 dark:text-gray-100 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:ring-offset-black
  ring-teal-400 flex w-fit  items-center justify-center
  rounded-lg p-2 px-6 font-semibold outline-none duration-300 focus:ring-4 focus:ring-offset-2"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
