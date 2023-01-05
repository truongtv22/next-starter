import Image from 'next/image';

import Heading from '../Heading';
import NcImage from '../NcImage';

import moneyImg from '../../public/images/money.png';
import planeImg from '../../public/images/plane.png';
import shieldImg from '../../public/images/shield.png';

import VectorImg from '../../public/images/VectorHIW.svg';

const DEMO_DATA = [
  {
    img: moneyImg,
    title: 'Convenient',
    description: 'One Sim to travel the world, easily managed through the app',
  },
  {
    img: planeImg,
    title: 'Value',
    description: 'The most competitive call and data rates',
  },
  {
    img: shieldImg,
    title: 'Safe',
    description:
      'Money back guarantee. Warranty policy. Free shipping 30+ countries',
  },
];

export default function SectionFeatures({ className = '', data = DEMO_DATA }) {
  return (
    <div className={`${className}`}>
      <Heading isCenter desc="Keep calm & travel on">
        How it work
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <Image
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center max-w-xs mx-auto "
          >
            <NcImage
              {...item.img}
              containerClassName="mb-8 max-w-[200px] mx-auto bg-blue-100 rounded-full p-12"
            />
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
