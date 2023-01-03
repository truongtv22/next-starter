import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition, Dialog, Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import Logo from '../Logo';
import SelectCurrency from './SelectCurrency';
import SelectLanguage from './SelectLanguage';

import ButtonClose from '../Button/ButtonClose';

const links = [
  {
    id: 1,
    link: '/',
    name: 'Home',
  },
  {
    id: 2,
    link: '/products',
    name: 'Products',
  },
  {
    id: 3,
    link: '/about-us',
    name: 'About us',
  },
];

export default function MenuBar({
  className = 'p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300',
  iconClassName = 'h-7 w-7',
}) {
  const { pathname } = useRouter();
  const [isVisable, setIsVisable] = useState(false);

  const isItemActive = (item) => pathname === item.link;

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderItem = (item) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <Link
          href={item.link}
          className={`flex w-full px-4 font-medium tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg ${
            isItemActive(item) ? 'text-secondary' : ''
          }`}
        >
          <span className="py-2.5 pr-3 block w-full">{item.name}</span>
        </Link>
      </Disclosure>
    );
  };

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 overflow-hidden"
          onClose={handleCloseMenu}
        >
          <Transition.Child
            as={Fragment}
            enter=" duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave=" duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0">
            <div className="flex justify-end min-h-full">
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 translate-x-56"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-56"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden transition-all">
                  <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                    <div className="flex py-4 px-5 items-center justify-between">
                      <Logo />
                      <ButtonClose onClick={handleCloseMenu} />
                    </div>
                    <div className="flex md:hidden py-2 px-5 justify-end">
                      <SelectCurrency />
                      <SelectLanguage />
                    </div>
                    <ul className="flex flex-col py-2 px-2 space-y-0">
                      {links.map(renderItem)}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className={`flex lg:hidden focus:outline-none items-center justify-center ${className}`}
      >
        <Bars3Icon className={iconClassName} />
      </button>
      {renderContent()}
    </>
  );
}
