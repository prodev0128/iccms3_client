import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';
import ProtectedRoute from '../components/ProtectedRoute';
import { roles } from '../globals/constants';

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
        element: (
          <ProtectedRoute roles={[roles.RECEIPT_VIEW]}>
            <Receipt />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dep',
        element: (
          <ProtectedRoute roles={[roles.DEP_VIEW, roles.PERSONAL_VIEW]}>
            <Dep />
          </ProtectedRoute>
        ),
      },
      {
        path: 'total',
        element: (
          <ProtectedRoute roles={[roles.TOTAL_VIEW]}>
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
