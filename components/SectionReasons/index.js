import Image from 'next/image';

import NcImage from '../NcImage';
import Badge from '../Badge';

import reasonImg from '../../public/images/reason-bg.png';

import bestRatesImg from '../../public/images/ic-best-rates.png';
import globalImg from '../../public/images/ic-global.png';
import networkImg from '../../public/images/ic-network.png';
import simpleImg from '../../public/images/ic-simple.png';
import trustworthyImg from '../../public/images/ic-trustworthy.png';

const reasons = [
  {
    title: 'Best rates',
    description:
      'We offer wholesale-level roaming rates. It cannot get much lower',
    image: bestRatesImg,
  },
  {
    title: 'Global Network',
    description:
      'Our Sim works all around the world and at any time we have customers in 50+ countries',
    image: globalImg,
  },
  {
    title: 'Network partners',
    description:
      'We work with most reputable telecoms networks around the globe. 4G available in 60+ countries',
    image: networkImg,
  },
  {
    title: 'Simple',
    description:
      'Only one balance for all countries, one rate to call any destination, any major credit card accepted...',
    image: simpleImg,
  },
  {
    title: 'Trustworthy',
    description:
      'Only when we earn your trust will you come back and share your experience',
    image: trustworthyImg,
  },
];

export default function SectionReasons({
  className = '',
  rightImg = reasonImg,
}) {
  return (
    <div
      className={`relative flex flex-col lg:flex-row items-center ${className}`}
    >
      <div className="hidden lg:block flex-grow">
        <NcImage {...rightImg} />
      </div>
      <div className="max-w-2xl flex-shrink-0 lg:w-4/5 lg:pl-16">
        <h2 className="font-semibold text-4xl mt-5">
          5 reasons to choose Xplori
        </h2>
        <ul className="space-y-10 mt-10">
          {reasons.map((item, index) => (
            <li
              key={index}
              className="flex sm:space-x-6 space-x-0 items-center"
            >
              <div className="hidden sm:block w-16">
                <Image src={item.image} alt={item.title} />
              </div>
              <div className="flex-1 space-y-3">
                <span className="block text-xl font-semibold">
                  {item.title}
                </span>
                <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
