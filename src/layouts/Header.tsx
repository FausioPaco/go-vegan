import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';
import cn from '@/utils/cn';
import SideNav from './SideNav';
import { useCallback, useState } from 'react';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navItems = [
    { name: 'ORDERS', to: '/orders' },
    { name: 'MENU', to: '/menu' },
    { name: 'ABOUT', to: '/about' },
    { name: 'FAQS', to: '/faqs' },
    { name: 'CONTACT', to: '/contact' },
  ];

  const navLinkClass = 'font-normal hover:text-primary-400 transition-colors';

  const getNavLinkClass = (isActive: boolean) =>
    cn(navLinkClass, { 'text-primary-400': isActive });

  const handleToggleNav = useCallback(() => {
    setShowNav((prevValue) => !prevValue);
  }, []);

  return (
    <>
      <SideNav show={showNav} toggleNav={handleToggleNav} />
      <header className="flex justify-between border-b border-white/25 pb-2 pt-4">
        <Icon
          name="nav-hamburger"
          className="ml-4 size-6 cursor-pointer fill-white md:hidden"
          onClick={handleToggleNav}
        />

        <Link to="/" className="block">
          <img
            src="/logo.svg"
            alt="Go Vegan Logo"
            className="block pl-6"
            width={160}
            height={45}
          />
        </Link>

        <nav className="hidden text-white md:block">
          <ul className="flex justify-center gap-x-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-2">
          <Icon name="user" className="text-white" />
        </div>
      </header>
    </>
  );
};

export default Header;
