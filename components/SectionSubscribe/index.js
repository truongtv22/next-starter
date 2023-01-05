import Image from 'next/image';

import NcImage from '../NcImage';
import Badge from '../Badge';
import Input from '../Input';
import ButtonCircle from '../Button/ButtonCircle';

import rocketImg from '../../public/images/ic-rocket.png';
import swapsimImg from '../../public/images/ic-swapsim.png';
import clickImg from '../../public/images/ic-click.png';

import xploriLandingImg from '../../public/images/xplori-landing-crop.png';

const features = [
  { image: rocketImg, description: 'Be a the edge of innovation' },
  { image: swapsimImg, description: 'Never switch Sims again' },
  { image: clickImg, description: 'Access Xplori service with one click' },
];

export default function SectionSubscribe({ className = '' }) {
  return (
    <div
      className={`relative flex flex-col lg:flex-row lg:items-center ${className}`}
    >
      <div className="flex-grow">
        <NcImage {...xploriLandingImg} />
      </div>
      <div className="flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:ml-16">
        <h2 className="font-semibold text-4xl">Announcing our new eSim</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Be one of the first to experience this amazing new technology if you
          own a iPhone X, iPhone 11, Pixel 3/ 4, Lenovo Yoga, Samsung Fold…
        </span>
        <ul className="space-y-4 mt-10">
          {features.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div className="w-8">
                <Image src={item.image} alt={item.description} />
              </div>
              <span className="flex-1 font-medium text-neutral-700 dark:text-neutral-300">
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
