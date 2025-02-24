import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

const Users = ComponentLoader(lazy(() => import('../pages/Admin/Users')));
const Codes = ComponentLoader(lazy(() => import('../pages/Admin/Codes')));
const Settings = ComponentLoader(lazy(() => import('../pages/Admin/Settings')));

const router = [
  {
    path: '',
    element: <Navigate replace to="users" />,
  },
  {
    children: [
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'codes',
        element: <Codes />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: '*',
        element: <Navigate replace to="/admin/users" />,
      },
    ],
  },
];

export default router;
