import NavigationItem from "./Item";

const links = [
  {
    id: 1,
    link: '/',
    name: 'Home',
  },
  {
    id: 2,
    link: '/products',
    name: 'Products',
  },
  {
    id: 3,
    link: '/about-us',
    name: 'About us',
  },
];

export default function Navigation() {
  return (
    <ul className="hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {links.map((item) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
