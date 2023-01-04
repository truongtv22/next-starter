import NcImage from '../NcImage';
import Badge from '../Badge';
import Input from '../Input';
import ButtonCircle from '../Button/ButtonCircle';

import xploriLandingImg from '../../public/images/xplori-landing.png';

export default function SectionSubscribe({ className = '' }) {
  return (
    <div
      className={`relative flex flex-col lg:flex-row lg:items-center ${className}`}
    >
      <div className="flex-grow">
        <NcImage {...xploriLandingImg} />
      </div>
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Join our newsletter 🎉</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Read and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
        <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium magazines
            </span>
          </li>
        </ul>
        <form className="mt-10 relative max-w-sm">
          <Input
            required
            aria-required
            placeholder="Enter your email"
            type="email"
            rounded="rounded-full"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-[5px]"
          >
            <i className="las la-arrow-right text-xl"></i>
          </ButtonCircle>
        </form>
      </div>
    </div>
  );
}
