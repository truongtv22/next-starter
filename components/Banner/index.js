import Image from 'next/image';

import ButtonPrimary from '../Button/ButtonPrimary';
import xploriImg from '../../public/images/sim-xplori.png';

export default function Banner({ className = '' }) {
  return (
    <div className={`flex flex-col-reverse lg:flex-col relative ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Stay connected wherever you go
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Simple setup. Best value. 4G connection.
          </span>
          <ButtonPrimary>Start your search</ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image src={xploriImg} alt="hero" className="w-full" />
        </div>
      </div>
      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full"></div>
    </div>
  );
}
