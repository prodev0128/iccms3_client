import { Navigate } from 'react-router';

import LayoutProvider from '../layouts/LayoutProvider';
import adminRouter from './admin';
import homeRouter from './home';

const router = [
  {
    children: [
      {
        children: homeRouter,
        path: '',
      },
      {
        children: adminRouter,
        path: 'admin',
      },
      {
        element: <Navigate replace to="/" />,
        path: '*',
      },
    ],
    element: <LayoutProvider />,
    path: '/',
  },
];

export default router;
