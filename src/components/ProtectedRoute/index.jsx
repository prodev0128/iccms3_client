import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

import { useAuth } from '../../redux/selectors';

const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user.roles) {
    return children;
  }

  if (roles && !roles.some((role) => user.roles.includes(role))) {
    return <Navigate to="/" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.array.isRequired,
};

export default ProtectedRoute;
