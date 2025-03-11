import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';
import { roles } from '../globals/constants';

const ProtectedRoute = ComponentLoader(lazy(() => import('../components/ProtectedRoute')));
const People = ComponentLoader(lazy(() => import('../pages/Stat/People')));
const Pub = ComponentLoader(lazy(() => import('../pages/Stat/Pub')));
const Flow = ComponentLoader(lazy(() => import('../pages/Stat/Flow')));

const router = [
  {
    path: '',
    element: <Navigate replace to="people" />,
  },
  {
    children: [
      {
        path: 'people',
        element: (
          <ProtectedRoute roles={[roles.PEOPLE_VIEW]}>
            <People />
          </ProtectedRoute>
        ),
      },
      {
        path: 'pub',
        element: (
          <ProtectedRoute roles={[roles.PUB_VIEW]}>
            <Pub />
          </ProtectedRoute>
        ),
      },
      {
        path: 'flow',
        element: (
          <ProtectedRoute roles={[roles.FLOW_VIEW]}>
            <Flow />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Navigate replace to="/stat/people" />,
      },
    ],
  },
];

export default router;
