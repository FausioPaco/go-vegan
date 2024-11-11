import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';

const Header = () => {
  return (
    <header className="flex justify-between border-b border-white/25 pb-2 pt-4">
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
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? 'font-normal text-primary-400' : 'font-normal'
              }
              end
            >
              ORDERS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'font-normal text-primary-400' : 'font-normal'
              }
              end
            >
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? 'font-normal text-primary-400' : 'font-normal'
              }
              end
            >
              FAQS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'font-normal text-primary-400' : 'font-normal'
              }
              end
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mx-2">
        <Icon name="user" className="text-white" />
      </div>
    </header>
  );
};

export default Header;
