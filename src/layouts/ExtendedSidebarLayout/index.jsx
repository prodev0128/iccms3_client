import { alpha, Box, lighten, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

import ThemeSettings from '../../components/ThemeSettings';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const ExtendedSidebarLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          '.MuiPageTitle-wrapper': {
            background: theme.palette.mode === 'dark' ? theme.colors.alpha.trueWhite[5] : theme.colors.alpha.white[50],
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15,
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(theme.colors.alpha.black[100], 0.1)}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05,
                  )}`,
            marginBottom: `${theme.spacing(4)}`,
          },
          flex: 1,

          height: '100%',
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.sidebar.width}`,
            },
            display: 'block',
            flex: 1,
            position: 'relative',
            pt: `${theme.header.height}`,
            zIndex: 5,
          }}
        >
          <Box display="block">
            <Outlet />
          </Box>
          <Footer />
          <ThemeSettings />
        </Box>
      </Box>
    </>
  );
};

export default ExtendedSidebarLayout;
