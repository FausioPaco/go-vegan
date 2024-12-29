import { Outlet } from 'react-router-dom';
import Footer from '@layouts/Footer';

const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-stretch">
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
