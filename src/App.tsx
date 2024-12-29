import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import LoadingPage from './layouts/LoadingPage';

const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Contact = lazy(() => import('./pages/Contact'));
const Order = lazy(() => import('./pages/Order'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingPage />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="menu"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="faqs"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Faqs />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          }
        />

        <Route
          path="order"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Order />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
