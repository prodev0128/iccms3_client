import { Box, CircularProgress } from '@mui/material';
import NProgress from 'nprogress';
import { useEffect } from 'react';

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={{
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
      }}
    >
      <CircularProgress disableShrink size={64} thickness={3} />
    </Box>
  );
};

export default SuspenseLoader;
