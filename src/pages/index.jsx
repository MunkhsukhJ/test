import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const fallback = <div>loading...</div>;
const Home = React.lazy(() => import('./home'));
const Companies = React.lazy(() => import('./companies'));

const Pages = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={fallback}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="/companies"
      element={
        <Suspense fallback={fallback}>
          <Companies />
        </Suspense>
      }
    />
  </Routes>
);

export default Pages;
