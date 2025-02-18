import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

const Users = ComponentLoader(lazy(() => import('../pages/Admin/Users')));
const Codes = ComponentLoader(lazy(() => import('../pages/Admin/Codes')));
const Settings = ComponentLoader(lazy(() => import('../pages/Admin/Settings')));

const router = [
  {
    element: <Navigate replace to="users" />,
    path: '',
  },
  {
    children: [
      {
        element: <Users />,
        name: 'users',
        path: 'users',
      },
      {
        element: <Codes />,
        name: 'codes',
        path: 'codes',
      },
      {
        element: <Settings />,
        name: 'settings',
        path: 'settings',
      },
      {
        element: <Navigate replace to="/admin/users" />,
        path: '*',
      },
    ],
  },
];

export default router;
