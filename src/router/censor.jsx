import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

const Processing = ComponentLoader(lazy(() => import('../pages/Censor/Processing')));

const router = [
  {
    path: '',
    element: <Navigate replace to="users" />,
  },
  {
    children: [
      {
        path: 'processing',
        element: <Processing />,
      },
      {
        path: '*',
        element: <Navigate replace to="/censor/processing" />,
      },
    ],
  },
];

export default router;
