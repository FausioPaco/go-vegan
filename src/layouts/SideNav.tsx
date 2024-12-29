import { Icon } from '@/components/ui/icon';
import { IconName } from '@/types/Icon';
import cn from '@/utils/cn';
import { AnimatePresence, motion } from 'motion/react';
import { Link, NavLink } from 'react-router-dom';

type ISideProps = {
  show: boolean;
  toggleNav: () => void;
};

type SideNavItem = {
  name: string;
  to: string;
  icon: IconName;
};

const SideNav = ({ show, toggleNav }: ISideProps) => {
  const navItems = [
    { name: 'HOME', to: '/', icon: 'nav-house' },
    { name: 'MENU', to: '/menu', icon: 'nav-menu' },
    { name: 'ABOUT', to: '/about', icon: 'nav-about' },
    { name: 'FAQS', to: '/faqs', icon: 'nav-faqs' },
    { name: 'CONTACT', to: '/contact', icon: 'nav-contact' },
  ] as SideNavItem[];

  const navLinkClass =
    'relative flex h-full cursor-pointer items-center py-4 pl-4 text-grey-600 transition-all hover:bg-primary-50 hover:text-primary-800';

  const getNavLinkClass = (isActive: boolean) =>
    cn(navLinkClass, {
      'text-primary-600 bg-primary-25 font-medium': isActive,
    });

  return (
    <div className="z-40 shadow-md">
      {show && (
        <div
          className="animate-fadeIn fixed left-0 top-0 h-full w-full bg-primary-700/50"
          onClick={toggleNav}
        ></div>
      )}
      <AnimatePresence>
        {show && (
          <>
            <motion.nav
              layout
              className="fixed top-0 box-border block h-full w-64 overflow-y-auto bg-white"
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ bounce: false }}
            >
              <div
                className="ml-2 mt-2 flex h-[40px] w-[40px] cursor-pointer items-center rounded-full bg-grey-25 p-3"
                onClick={toggleNav}
              >
                <Icon
                  name="nav-close"
                  className="relative fill-primary-800"
                  width={24}
                  height={24}
                />
              </div>

              <div className="my-4 flex flex-col items-center gap-y-2 px-2 text-center">
                <Link to="/" className="block">
                  <img
                    src="/logo-side-nav.svg"
                    alt="Go Vegan Logo"
                    className="block pl-6"
                    width={161}
                    height={45}
                  />
                </Link>
                <p className="text-sm italic text-grey-500">
                  Where Vegan Cuisine Excels Without Sacrificing Taste!
                </p>
              </div>

              {/* Menu Items */}
              <ul className="mt-5">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => getNavLinkClass(isActive)}
                      end
                    >
                      <Icon
                        name={item.icon}
                        className="mr-3 fill-currentColor"
                      />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideNav;
