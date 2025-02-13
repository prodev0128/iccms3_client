import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

import axios from '../utils/axios';
import { JWT_SECRET, verify } from '../utils/jwt';

const initialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialAuthState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  method: 'JWT',
  register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && verify(accessToken, JWT_SECRET)) {
          setSession(accessToken);

          const response = await axios.get('/api/account/personal');
          const { user } = response.data;

          dispatch({
            payload: {
              isAuthenticated: true,
              user,
            },
            type: 'INITIALIZE',
          });
        } else {
          dispatch({
            payload: {
              isAuthenticated: false,
              user: null,
            },
            type: 'INITIALIZE',
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          payload: {
            isAuthenticated: false,
            user: null,
          },
          type: 'INITIALIZE',
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/api/account/login', {
      email,
      password,
    });
    const { accessToken, user } = response.data;

    setSession(accessToken);
    dispatch({
      payload: {
        user,
      },
      type: 'LOGIN',
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email, name, password) => {
    const response = await axios.post('/api/account/register', {
      email,
      name,
      password,
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem('accessToken', accessToken);
    dispatch({
      payload: {
        user,
      },
      type: 'REGISTER',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        method: 'JWT',
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
