import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

const Receipt = ComponentLoader(lazy(() => import('../pages/Censor/Receipt')));
const Dep = ComponentLoader(lazy(() => import('../pages/Censor/Dep')));
const Total = ComponentLoader(lazy(() => import('../pages/Censor/Total')));

const router = [
  {
    path: '',
    element: <Navigate replace to="dep" />,
  },
  {
    children: [
      {
        path: 'receipt',
        element: <Receipt />,
      },
      {
        path: 'dep',
        element: <Dep />,
      },
      {
        path: 'total',
        element: <Total />,
      },
      {
        path: '*',
        element: <Navigate replace to="/censor/dep" />,
      },
    ],
  },
];

export default router;
