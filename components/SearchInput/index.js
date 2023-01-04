import { useRef, useState } from 'react';
import { CpuChipIcon } from '@heroicons/react/24/outline';

import ClearButton from './ClearButton';
import ButtonSubmit from '../SearchForm/ButtonSubmit';

export default function SearchInput({
  defaultValue,
  onChange,
  placeHolder = 'Where do you need internet?',
  desc = 'APAC Sim, Global Sim',
  className = 'flex-[1.5]',
  fieldClassName = '[ nc-hero-field-padding ]',
  hasButtonSubmit = true,
}) {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`relative flex ${className}`} ref={containerRef}>
      <div className="flex flex-1 items-center cursor-pointer focus:outline-none">
        <div
          className={`flex flex-1 text-left items-center ${fieldClassName} space-x-3`}
        >
          <div className="text-neutral-300 dark:text-neutral-400">
            <CpuChipIcon className="w-6 h-6" />
          </div>
          <div className="flex-grow">
            <input
              className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
              placeholder={placeHolder}
              value={value}
              onChange={(e) => {
                setValue(e.currentTarget.value);
                onChange && onChange(e.currentTarget.value);
              }}
              ref={inputRef}
            />
            <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
              <span className="line-clamp-1">
                {!!value ? placeHolder : desc}
              </span>
            </span>
          </div>
          {value && (
            <ClearButton
              onClick={() => {
                setValue('');
                onChange && onChange('');
              }}
            />
          )}
        </div>
        {hasButtonSubmit && (
          <div className="pr-2 xl:pr-4">
            <ButtonSubmit />
          </div>
        )}
      </div>
    </div>
  );
}
