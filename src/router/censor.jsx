import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';
import { roles } from '../globals/constants';

const ProtectedRoute = ComponentLoader(lazy(() => import('../components/ProtectedRoute')));
const Receipt = ComponentLoader(lazy(() => import('../pages/Censor/Receipt')));
const Dep = ComponentLoader(lazy(() => import('../pages/Censor/Dep')));
const Personal = ComponentLoader(lazy(() => import('../pages/Censor/Personal')));
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
        element: (
          <ProtectedRoute requireRoles={[roles.RECEIPT_VIEW]}>
            <Receipt />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dep',
        element: (
          <ProtectedRoute requireRoles={[roles.DEP_VIEW]}>
            <Dep />
          </ProtectedRoute>
        ),
      },
      {
        path: 'personal',
        element: (
          <ProtectedRoute requireRoles={[roles.PERSONAL_VIEW]}>
            <Personal />
          </ProtectedRoute>
        ),
      },
      {
        path: 'total',
        element: (
          <ProtectedRoute requireRoles={[roles.TOTAL_VIEW]}>
            <Total />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Navigate replace to="/censor/dep" />,
      },
    ],
  },
];

export default router;
