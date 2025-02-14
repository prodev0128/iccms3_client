import { Navigate } from 'react-router';

import LayoutProvider from '../layouts/LayoutProvider';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';

const router = [
  {
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Dashboard />,
        path: '/dashboards',
      },
      {
        element: <Navigate replace to="/" />,
        path: '*',
      },
    ],
    element: <LayoutProvider />,
  },
];

export default router;
