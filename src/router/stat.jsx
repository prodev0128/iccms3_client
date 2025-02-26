import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

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
        element: <People />,
      },
      {
        path: 'pub',
        element: <Pub />,
      },
      {
        path: 'flow',
        element: <Flow />,
      },
      {
        path: '*',
        element: <Navigate replace to="/stat/people" />,
      },
    ],
  },
];

export default router;
