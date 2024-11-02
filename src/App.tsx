import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <About />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
