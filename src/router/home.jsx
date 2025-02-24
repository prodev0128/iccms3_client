import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

const Home = ComponentLoader(lazy(() => import('../pages/Home')));

const router = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate replace to="/" />,
  },
];

export default router;
