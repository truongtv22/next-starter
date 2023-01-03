import Logo from '../Logo';

const footerMenus = [
  {
    title: 'Product',
    menus: [
      { href: '#', label: 'Rate & Coverage' },
      { href: '#', label: 'Country Credits' },
      { href: '#', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    menus: [
      { href: '#', label: 'About' },
      { href: '#', label: 'Join us' },
      { href: '#', label: 'Partner' },
    ],
  },
  {
    title: 'Contact',
    menus: [
      { href: '#', label: 'Email:', value: 'listen@xplori.world' },
      { href: '#', label: 'Main office:', value: '38 Lok Ku Road, Hong Kong' },
    ],
  },
];

export default function Footer() {
  const renderMenuItem = (menu, index) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              {item.value ? (
                <div key={index}>
                  <p>{item.label}</p>

                  <a
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href={item.href}
                  >
                    {item.value}
                  </a>
                </div>
              ) : (
                <a
                  key={index}
                  className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
        </div>
        {footerMenus.map(renderMenuItem)}
      </div>
    </div>
  );
}
