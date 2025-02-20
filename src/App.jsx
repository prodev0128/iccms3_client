import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SnackbarProvider } from 'notistack';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router';

import Authenticated from './components/Authenticated';
import useDebounceCallback from './hooks/useDebounceCallback';
import { fetchProfile, initialize } from './redux/actions/auth';
import { useAuth } from './redux/selectors';
import router from './router';
import ThemeProvider from './themes/ThemeProvider';
import { debounceTime } from './utils/utils';

const App = () => {
  const dispatch = useDispatch();
  const { authenticated, initialized, user } = useAuth();
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
    if (authenticated && !user.name) {
      debouncedFetchProfile();
    }
  }, [authenticated, user.name, debouncedFetchProfile]);

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
