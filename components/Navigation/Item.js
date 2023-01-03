import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavigationItem({ item }) {
  const { pathname } = useRouter();

  const isActive = pathname === item.link;

  return (
    <li className="menu-item">
      <Link
        href={item.link}
        className={`inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${
          isActive
            ? '!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100'
            : ''
        } `}
      >
        {item.name}
      </Link>
    </li>
  );
}
