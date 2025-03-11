import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';
import ProtectedRoute from '../components/ProtectedRoute';
import { roles } from '../globals/constants';

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
        element: (
          <ProtectedRoute roles={[roles.USERS_VIEW]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: 'codes',
        element: (
          <ProtectedRoute roles={[roles.CODES_VIEW]}>
            <Codes />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute roles={[roles.SETTINGS_VIEW]}>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Navigate replace to="/admin/users" />,
      },
    ],
  },
];

export default router;
