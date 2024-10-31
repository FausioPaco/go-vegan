import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-stretch">
      <header>Header</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Example Footer</footer>
    </div>
  );
};

export default DefaultLayout;
