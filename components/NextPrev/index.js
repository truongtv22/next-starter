import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import twFocusClass from '../../utils/twFocusClass';

export default function NextPrev({
  className = '',
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = 'w-10 h-10',
  onlyNext = false,
  onlyPrev = false,
}) {
  return (
    <div
      className={`nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${className}`}
      data-nc-id="NextPrev"
      data-glide-el="controls"
    >
      {!onlyNext && (
        <button
          className={`${btnClassName} ${
            !onlyPrev ? 'mr-[6px]' : ''
          } bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 ${twFocusClass()}`}
          onClick={onClickPrev}
          title="Prev"
          data-glide-dir="<"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
      )}
      {!onlyPrev && (
        <button
          className={`${btnClassName} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 ${twFocusClass()}`}
          onClick={onClickNext}
          title="Next"
          data-glide-dir=">"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
