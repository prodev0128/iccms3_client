import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router';

import Authenticated from './components/Authenticated';
import { fetchProfile, initialize } from './redux/actions/auth';
import useAuth from './redux/selectors/useAuth';
import router from './router';
import ThemeProvider from './themes/ThemeProvider';

const App = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const content = useRoutes(router);

  useEffect(() => {
    if (!auth.initialized) {
      dispatch(initialize());
    }
    if (auth.authenticated && !auth.user.name && auth.status !== 'loading') {
      dispatch(fetchProfile());
    }
  }, [dispatch, auth]);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider
          maxSnack={10}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        >
          <CssBaseline />
          <Authenticated>{content}</Authenticated>
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
