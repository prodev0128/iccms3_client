import { Navigate } from 'react-router';

import LayoutProvider from '../layouts/LayoutProvider';
import adminRouter from './admin';
import homeRouter from './home';

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
        path: '*',
        element: <Navigate replace to="/" />,
      },
    ],
  },
];

export default router;
