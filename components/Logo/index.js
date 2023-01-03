import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../../public/images/logo.png';

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
    >
      <Image src={logoImg} alt="" />
    </Link>
  );
}
