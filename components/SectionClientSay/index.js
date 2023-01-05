import { useEffect } from 'react';
import Image from 'next/image';
import Glide from '@glidejs/glide';

import Heading from '../Heading';

import clientSayMain from '../../public/images/clientSayMain.png';
import clientSay1 from '../../public/images/clientSay1.png';
import clientSay2 from '../../public/images/clientSay2.png';
import clientSay3 from '../../public/images/clientSay3.png';
import clientSay4 from '../../public/images/clientSay4.png';
import clientSay5 from '../../public/images/clientSay5.png';
import clientSay6 from '../../public/images/clientSay6.png';
import quotationImg from '../../public/images/quotation.png';
import quotationImg2 from '../../public/images/quotation2.png';

const DEMO_DATA = [
  {
    id: 1,
    clientName: 'Agnes Ho',
    clientOffice: 'Flight Attendant',
    content:
      'I used the service frequently given my travel schedule as flight attendant. It works great, and top-ups are quick and simple.',
  },
  {
    id: 2,
    clientName: 'Le Kim Hoa',
    clientOffice: 'Photographer',
    content:
      'The data allowance of Xplori packages is generous and I love the ability to callback to Vietnam at low rate. Customer service is always responsive and helpful.',
  },
  {
    id: 3,
    clientName: 'Thomas Dressel',
    clientOffice: 'Business Owner',
    content:
      'Xplori is great product and ideal for business travel. I no longer have to worry about roaming cost while always being connected.',
  },
];

export default function SectionClientSay({
  className = '',
  uniqueClassName = '',
}) {
  const UNIQUE_CLASS = 'SectionClientSay_glide' + uniqueClassName;

  useEffect(() => {
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      setTimeout(() => {
        new Glide(`.${UNIQUE_CLASS}`, {
          perView: 1,
        }).mount();
      }, 10);
    }
  }, []);

  const renderBg = () => {
    return (
      <div className="hidden md:block">
        <Image className="absolute top-9 -left-20" src={clientSay1} alt="" />
        <Image
          className="absolute bottom-[100px] right-full mr-40"
          src={clientSay2}
          alt=""
        />
        <Image
          className="absolute top-full left-[140px]"
          src={clientSay3}
          alt=""
        />
        <Image
          className="absolute -bottom-10 right-[140px]"
          src={clientSay4}
          alt=""
        />
        <Image
          className="absolute left-full ml-32 bottom-[80px]"
          src={clientSay5}
          alt=""
        />
        <Image className="absolute -right-10 top-10 " src={clientSay6} alt="" />
      </div>
    );
  };

  return (
    <div className={`relative ${className} `}>
      <Heading desc="Let's see what people think of Xplori" isCenter>
        Join the 1,000,000+ Xplori user community
      </Heading>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        {renderBg()}
        <Image className="mx-auto" src={clientSayMain} alt="" />
        <div className={`mt-12 lg:mt-16 relative ${UNIQUE_CLASS}`}>
          <Image
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotationImg}
            alt=""
          />
          <Image
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotationImg2}
            alt=""
          />
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides ">
              {DEMO_DATA.map((item) => (
                <li
                  key={item.id}
                  className="glide__slide flex flex-col items-center text-center"
                >
                  <span className="block text-2xl">{item.content}</span>
                  <span className="block mt-8 text-2xl font-semibold">
                    {`${item.clientName},`}
                  </span>
                  <div className="flex items-center space-x-2 text-lg mt-2 text-neutral-400">
                    <span>{item.clientOffice}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="mt-10 glide__bullets flex items-center justify-center"
            data-glide-el="controls[nav]"
          >
            {DEMO_DATA.map((item, index) => (
              <button
                key={item.id}
                className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
