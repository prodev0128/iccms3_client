import { lazy } from 'react';
import { Navigate } from 'react-router';

import ComponentLoader from '../components/ComponentLoader';

const Processing = ComponentLoader(lazy(() => import('../pages/Censor/Processing')));
const Incoming = ComponentLoader(lazy(() => import('../pages/Censor/Incoming')));
const Outgoing = ComponentLoader(lazy(() => import('../pages/Censor/Outgoing')));

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
        path: 'incoming',
        element: <Incoming />,
      },
      {
        path: 'outgoing',
        element: <Outgoing />,
      },
      {
        path: '*',
        element: <Navigate replace to="/censor/processing" />,
      },
    ],
  },
];

export default router;
