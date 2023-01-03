import { Fragment, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Popover, Transition } from '@headlessui/react';
import { TrashIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

import InputNumber from '../InputNumber';
import ButtonPrimary from '../Button/ButtonPrimary';

const cartItems = [
  { id: 1, name: 'APAC Sim', quantity: 1, price: '19.00' },
  { id: 2, name: 'Global Sim', quantity: 2, price: '19.90' },
  { id: 3, name: 'Global Sim 1', quantity: 2, price: '19.90' },
  { id: 4, name: 'Global Sim 1', quantity: 2, price: '19.90' },
  // { id: 5, name: 'Global Sim 1', quantity: 2, price: '19.90' },
  // { id: 6, name: 'Global Sim 1', quantity: 2, price: '19.90' },
  // { id: 7, name: 'Global Sim 1', quantity: 2, price: '19.90' },
  // { id: 8, name: 'Global Sim 1', quantity: 2, price: '19.90' },
  // { id: 9, name: 'Global Sim 1', quantity: 2, price: '19.90' },
];

export default function CartDropdown() {
  const popperElRef = useRef();
  const [targetElement, setTargetElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(targetElement, popperElement, {
    placement: 'bottom-end',
  });

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              ref={setTargetElement}
              className={` ${
                open ? '' : 'text-opacity-90'
              } group p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative`}
            >
              <span className="bg-blue-500 absolute top-0 right-0 rounded-full px-1 min-w-[1.25rem] text-white text-sm">
                1
              </span>
              <ShoppingCartIcon className="h-6 w-6" />
            </Popover.Button>
            <div ref={popperElRef} style={styles.popper} {...attributes.popper}>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                beforeEnter={() => setPopperElement(popperElRef.current)}
                afterLeave={() => setPopperElement(null)}
              >
                <Popover.Panel className="z-10 w-screen sm:max-w-sm mt-2">
                  <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white dark:bg-neutral-800 p-7">
                      <h3 className="text-xl font-semibold">Cart</h3>
                      <div className="grid gap-4">
                        <div className="grid gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-h-60">
                          {cartItems.map((item) => (
                            <div key={item.id} className="relative">
                              <div className="flex space-x-2 justify-between">
                                <a
                                  href="##"
                                  className="mt-1 font-medium text-gray-900 dark:text-gray-200 line-clamp-2"
                                >
                                  {item.name}
                                </a>
                                <button className="p-1 hover:bg-gray-100 rounded-full">
                                  <TrashIcon className="w-6 h-6" />
                                </button>
                              </div>
                              <div className="flex items-center justify-between">
                                <InputNumber defaultValue={item.quantity} />
                                <p className="text-gray-500 dark:text-gray-400">
                                  {`$${item.price}`}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>$199</span>
                        </div>
                      </div>
                      <ButtonPrimary href="/checkout">Checkout</ButtonPrimary>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
}
