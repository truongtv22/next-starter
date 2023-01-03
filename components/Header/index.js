import Logo from '../Logo';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <div className="nc-header-bg sticky top-0 w-full left-0 right-0 z-40 shadow-sm dark:border-b dark:border-neutral-700">
      <div className="relative z-10">
        <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
          <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
}
