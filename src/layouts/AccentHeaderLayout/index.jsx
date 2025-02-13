import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

import ThemeSettings from '../../components/ThemeSettings';
import Header from './Header';
import Sidebar from './Sidebar';

const AccentHeaderLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{
          [theme.breakpoints.up('lg')]: {
            pl: `${theme.sidebar.width}`,
          },
          display: 'flex',
          flex: 1,
          position: 'relative',
          pt: `${theme.header.height}`,
          zIndex: 5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box flexGrow={1}>
            <Outlet />
          </Box>
        </Box>
        <ThemeSettings />
      </Box>
    </>
  );
};

export default AccentHeaderLayout;
