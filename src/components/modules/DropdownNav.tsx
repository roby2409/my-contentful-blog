import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';
import { NavItemType } from '@src/types/navbar';

interface DropdownNavProps {
  items: NavItemType[];
}

const DropdownNav: React.FC<DropdownNavProps> = ({ items }) => {
  return (
    <div className="relative flex items-center justify-center">
      <Menu>
        <Menu.Button className="rounded outline-none ring-[#10161a] duration-300 focus:ring-4 focus:ring-offset-2 dark:ring-offset-black">
          <FiMenu className="cursor-pointer text-xl text-gray-600 duration-300 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100" />
        </Menu.Button>
        <Menu.Items>
          <div className="absolute left-0 top-8 flex w-36 flex-col justify-between rounded-lg border  border-teal-100 bg-white py-2 text-sm dark:border-teal-900 dark:bg-[#10161a]/100">
            {items?.map(item => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    className={`p-2 px-3 text-gray-600 dark:text-gray-300 ${
                      active ? 'bg-[#10161a] text-gray-100 duration-300 dark:bg-[#10161a]' : ' '
                    }`}
                    href={item.to}
                  >
                    {item.dropdown ? item.dropdown : item.text}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownNav;
