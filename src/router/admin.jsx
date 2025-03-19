import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';
import { roles } from '../globals/constants';

const ProtectedRoute = ComponentLoader(lazy(() => import('../components/ProtectedRoute')));
const Users = ComponentLoader(lazy(() => import('../pages/Admin/Users')));
const Codes = ComponentLoader(lazy(() => import('../pages/Admin/Codes')));
const Settings = ComponentLoader(lazy(() => import('../pages/Admin/Settings')));
const News = ComponentLoader(lazy(() => import('../pages/Admin/News')));

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
          <ProtectedRoute requireRoles={[roles.USERS_VIEW]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: 'codes',
        element: (
          <ProtectedRoute requireRoles={[roles.CODES_VIEW]}>
            <Codes />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute requireRoles={[roles.SETTINGS_VIEW]}>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: 'news',
        element: (
          <ProtectedRoute requireRoles={[roles.NEWS_VIEW]}>
            <News />
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
