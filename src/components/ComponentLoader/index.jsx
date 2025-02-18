import { Suspense } from 'react';

import SuspenseLoader from '../SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

export default Loader;
