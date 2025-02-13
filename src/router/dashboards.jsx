import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';

import SuspenseLoader from '../components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards

const Reports = Loader(lazy(() => import('../content/dashboards/Reports')));

const dashboardsRoutes = [
  {
    element: <Navigate replace to="reports" />,
    index: true,
  },
  {
    element: <Reports />,
    path: 'reports',
  },
];

export default dashboardsRoutes;
