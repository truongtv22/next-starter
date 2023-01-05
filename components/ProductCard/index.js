import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';

import NcImage from '../NcImage';
import Badge from '../Badge';
import StartRating from '../StartRating';
import BtnLikeIcon from '../BtnLikeIcon';
import SaleOffBadge from '../SaleOffBadge';

export default function ProductCard({
  size = 'default',
  className = '',
  data,
}) {
  const {
    id,
    name,
    country,
    image,
    price,
    reviewPoint = 5,
    reviewCount = 100,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <div className="aspect-w-4 aspect-h-3">
          <NcImage src={image} className="w-full h-full" />
        </div>
        {/* <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" /> */}
        {/* {saleOff && <SaleOffBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === 'default' ? 'p-4 space-y-4' : 'p-3 space-y-2'}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {/* {isAds && <Badge name="ADS" color="green" />} */}
            <h2 className="font-medium capitalize text-lg">
              <span className="line-clamp-1">{name}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            <MapPinIcon className="h-5 w-5" />
            <span className="">{country}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">{`$${price}`}</span>
          {!!reviewPoint && (
            <StartRating reviewCount={reviewCount} point={reviewPoint} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden will-change-transform hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="StayCard"
    >
      {renderSliderGallery()}
      <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
      <Link href={''}>{renderContent()}</Link>
    </div>
  );
}
