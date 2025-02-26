import { Navigate } from 'react-router';

import LayoutProvider from '../layouts/LayoutProvider';
import adminRouter from './admin';
import censorRouter from './censor';
import homeRouter from './home';
import statRouter from './stat';

const router = [
  {
    path: '/',
    element: <LayoutProvider />,
    children: [
      {
        path: '',
        children: homeRouter,
      },
      {
        path: 'admin',
        children: adminRouter,
      },
      {
        path: 'censor',
        children: censorRouter,
      },
      {
        path: 'stat',
        children: statRouter,
      },
      {
        path: '*',
        element: <Navigate replace to="/" />,
      },
    ],
  },
];

export default router;
