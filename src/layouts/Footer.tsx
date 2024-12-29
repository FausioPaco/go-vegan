import { Icon } from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'ABOUT', to: '/about' },
    { name: 'TERMS OF SERVICE', to: '/#' },
    { name: 'PRIVACY POLICY', to: '/#' },
    { name: 'FAQS', to: '/faqs' },
    { name: 'CONTACT', to: '/contact' },
  ];
  return (
    <footer className="flex flex-col items-center justify-center bg-grey-700 px-6 py-8 text-white">
      <div className="w-full text-center md:max-w-[90%]">
        <div className="flex flex-col items-center gap-y-3 md:flex-row md:justify-between md:gap-y-0">
          <Link to="/" className="block">
            <img
              src="/logo-alt.svg"
              alt="Go Vegan Logo"
              className="block"
              width={168}
              height={53}
            />
          </Link>
          <nav className="text-white">
            <ul className="flex flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-6 md:gap-y-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="font-normal transition-colors hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-x-2">
            <Link to="/#">
              <Icon name="facebook" className="fill-white" />
            </Link>
            <Link to="/#">
              <Icon name="instagram" className="fill-white" />
            </Link>
            <Link to="/#">
              <Icon name="twitter" className="fill-white" />
            </Link>
          </div>
        </div>
        <hr className="mt-4 w-full border-t-grey-600" />
        <small className="mt-6 inline-block text-grey-500">
          © GoVegan, 2020
        </small>
      </div>
    </footer>
  );
};

export default Footer;
