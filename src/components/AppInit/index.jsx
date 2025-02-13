import { Box } from '@mui/material';

import Logo from '../LogoSign';

const AppInit = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={{
        bottom: 0,
        height: '100%',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
      }}
    >
      <Logo />
    </Box>
  );
};

export default AppInit;
