import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { SnackbarProvider } from 'notistack';
import { useRoutes } from 'react-router';

import AppInit from './components/AppInit';
import useAuth from './hooks/useAuth';
import router from './router';
import ThemeProvider from './theme/ThemeProvider';

const App = () => {
  const content = useRoutes(router);
  const auth = useAuth();

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
          {auth.isInitialized ? content : <AppInit />}
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
