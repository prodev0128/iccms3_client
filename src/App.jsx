import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DialogsProvider } from '@toolpad/core';
import { SnackbarProvider } from 'notistack';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router';

import Authenticated from './components/Authenticated';
import News from './components/News';
import { debounceTime } from './globals/constants';
import useDebounceCallback from './hooks/useDebounceCallback';
import SnackbarManager from './pages/SnackbarManager';
import { fetchProfile, initialize } from './redux/actions/auth';
import { useAuth } from './redux/selectors';
import router from './router';
import ThemeProvider from './themes/ThemeProvider';

const App = () => {
  const dispatch = useDispatch();
  const { authenticated, initialized } = useAuth();
  const content = useRoutes(router);

  const debouncedFetchProfile = useDebounceCallback(
    useCallback(() => dispatch(fetchProfile()), [dispatch]),
    debounceTime,
  );

  useEffect(() => {
    if (!initialized) {
      dispatch(initialize());
    }
  }, [dispatch, initialized]);

  useEffect(() => {
    if (authenticated) {
      debouncedFetchProfile();
    }
  }, [authenticated, debouncedFetchProfile]);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider
          maxSnack={20}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        >
          <SnackbarManager />
          <DialogsProvider>
            <CssBaseline />
            <Authenticated>
              <News>{content}</News>
            </Authenticated>
          </DialogsProvider>
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
