import Link from 'next/link';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa6';

export default function FooterSection() {
  return (
    <footer className="border-color flex w-full flex-col items-center justify-between border-t py-10 text-sm sm:flex-row dark:text-gray-100">
      <div className="mb-6 flex gap-3 sm:mb-0">
        <Link
          href="/"
          className="no-underline underline-offset-2 transition-colors hover:text-gray-800 hover:underline dark:hover:text-gray-100"
          rel="noopener noreferrer"
        >
          /me
        </Link>
        <Link
          href="/about"
          className="no-underline underline-offset-2 transition-colors hover:text-gray-800 hover:underline dark:hover:text-gray-100"
          rel="noopener noreferrer"
        >
          /about
        </Link>
        <Link
          href="/stories"
          className="no-underline underline-offset-2 transition-colors hover:text-gray-800 hover:underline dark:hover:text-gray-100"
          rel="noopener noreferrer"
        >
          /stories
        </Link>
        <Link
          href="/blog"
          className="no-underline underline-offset-2 transition-colors hover:text-gray-800 hover:underline dark:hover:text-gray-100"
          rel="noopener noreferrer"
        >
          /blog
        </Link>
        <Link
          href="/uses"
          className="no-underline underline-offset-2 transition-colors hover:text-gray-800 hover:underline dark:hover:text-gray-100"
          rel="noopener noreferrer"
        >
          /uses
        </Link>
      </div>
      <div className="flex items-center space-x-1">
        <FaRegCopyright />
        <span className="text-gray-600 dark:text-gray-300">
          {new Date().getFullYear()} by Roby Setiawan
        </span>
      </div>
    </footer>
  );
}
