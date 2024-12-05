import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Contact = lazy(() => import('./pages/Contact'));

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
        <Route
          path="menu"
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="faqs"
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Faqs />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
