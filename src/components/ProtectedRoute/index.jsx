import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

import { roles } from '../../globals/constants';
import { useAuth } from '../../redux/selectors';

const ProtectedRoute = ({ children, requireRoles }) => {
  const { user } = useAuth();
  if (!user.roles || user.roles.includes(roles.ADMIN)) {
    return children;
  }

  if (requireRoles && !requireRoles.some((role) => user.roles.includes(role))) {
    return <Navigate to="/" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  requireRoles: PropTypes.array.isRequired,
};

export default ProtectedRoute;
