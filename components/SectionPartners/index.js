import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Glide from '@glidejs/glide';

import NcImage from '../NcImage';
import Heading from '../Heading';
import NextPrev from '../NextPrev';

const partners = [
  {
    name: 'Kuoni',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/kuoni.png?v=175685057286109116511665761563',
  },
  {
    name: 'NoVotel',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/novotel.png?v=121623941865224192041665761563',
  },
  {
    name: 'Singapore Airlines',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/singapore-airlines.png?v=64213501874348034471665761563',
  },
  {
    name: 'Traveloka',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/traveloka.png?v=62582439502393965451665761563',
  },
  {
    name: 'WeWork',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/wework.png?v=166398381283137519721665761563',
  },
  {
    name: 'Swissotel',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/swissotel.png?v=137338989490648092091665761563',
  },
  {
    name: 'Alpa S',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/alpa-s.png?v=169625626859869624411665761563',
  },
  {
    name: 'The Hive.',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/the-hive.png?v=2903636286955208481665761563',
  },
  {
    name: 'Bao Viet',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/baoviet.png?v=17206729665290986081665761563',
  },
  {
    name: 'Lancaster',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/lancaster.png?v=175216833507005040061665761563',
  },
  {
    name: 'HSBC',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/hsbc.png?v=165551528756556184391665761563',
  },
  {
    name: 'Grab',
    thumbnail:
      '//cdn.shopify.com/s/files/1/0023/8403/5875/t/19/assets/grab.png?v=34977124318937949711665761563',
  },
];

export default function SectionPartners({
  className = '',
  itemClassName = '',
  itemPerRow = 4,
  uniqueClassName = '',
}) {
  const UNIQUE_CLASS = 'SectionPartners_glide' + uniqueClassName;

  useEffect(() => {
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      setTimeout(() => {
        new Glide(`.${UNIQUE_CLASS}`, {
          perView: itemPerRow,
          gap: 32,
          bound: true,
          breakpoints: {
            1280: {
              perView: itemPerRow - 1,
            },
            1024: {
              gap: 20,
              perView: itemPerRow - 1,
            },
            768: {
              gap: 20,
              perView: itemPerRow - 2,
            },
            640: {
              gap: 20,
              perView: itemPerRow - 3,
            },
            500: {
              gap: 20,
              perView: 1.3,
            },
          },
        }).mount();
      }, 10);
    }
  }, []);

  const renderCard = (item, index) => <NcImage src={item.thumbnail} />;

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc="We believe in growing with and through our partners. And clearly they believe in us, too."
          hasNextPrev={false}
          isCenter={true}
        >
          Trusted by our partners
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {partners.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>
        <NextPrev className="justify-center mt-16" />
      </div>
    </div>
  );
}
