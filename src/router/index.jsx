import { Navigate } from 'react-router';

import Authenticated from '../components/Authenticated';
import AccentHeaderLayout from '../layouts/AccentHeaderLayout';
import dashboardsRoutes from './dashboards';

const router = [
  {
    element: <Navigate replace to="/accent-header" />,
    index: true,
  },
  {
    children: [
      {
        element: <Navigate replace to="dashboards" />,
        index: true,
      },
      {
        children: dashboardsRoutes,
        path: 'dashboards',
      },
    ],
    element: (
      <Authenticated>
        <AccentHeaderLayout />
      </Authenticated>
    ),
    path: 'accent-header',
  },
];

export default router;
