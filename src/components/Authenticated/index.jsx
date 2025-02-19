import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

import useAuth from '../../hooks/useAuth';
import Login from '../../pages/Auth/Login';
import { initialize } from '../../redux/actions/auth';

const Authenticated = ({ children }) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  if (!auth.authenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <Login />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node,
};

export default Authenticated;
