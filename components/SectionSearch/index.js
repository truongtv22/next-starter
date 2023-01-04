import Image from 'next/image';

import SearchForm from '../SearchForm';
import ButtonPrimary from '../Button/ButtonPrimary';

import xploriImg from '../../public/images/sim-xplori.png';

export default function SectionSearch({ className = '' }) {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 sm:space-y-8 pb-0 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            Stay connected wherever you go
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Simple setup. Best value. 4G connection.
          </span>
          <ButtonPrimary>Start your search</ButtonPrimary>
        </div>
        <div className="hidden lg:block flex-grow">
          <Image
            src={xploriImg}
            alt="xplori"
            priority={true}
            className="w-full"
          />
        </div>
      </div>
      <div className="z-10 --mb-12 -lg:mb-0 lg:-mt-40 w-full">
        <SearchForm />
      </div>
    </div>
  );
}
