import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col">
      <header>Header</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Example Footer</footer>
    </div>
  );
};

export default DefaultLayout;
