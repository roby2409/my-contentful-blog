import Link from 'next/link';
import React from 'react';
import { FaRegCopyright, FaWhatsapp } from 'react-icons/fa6';

export default function FooterSection() {
  const handleClick = async () => {
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    const teks =
      '&text=Halo+Roby%2C%0ASaya+ingin+diskusi+untuk+tahu+lebih+lanjut+tentang+tentang+anda&type=phone_number&app_absent=0';
    if (navigator.userAgent.includes('WhatsApp')) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=6281273067776${teks}`);
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=6281273067776${teks}`, '_blank');
    }
  };

  return (
    <>
      <div
        className="fixed bottom-10 right-4 w-min cursor-pointer
          rounded-full bg-green-600 p-2 md:right-8"
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="h-7 w-7 md:h-10 md:w-10" />
      </div>
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
            href="/projects"
            className="no-underline underline-offset-2 transition-colors hover:text-gray-800 hover:underline dark:hover:text-gray-100"
            rel="noopener noreferrer"
          >
            /projects
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
    </>
  );
}
