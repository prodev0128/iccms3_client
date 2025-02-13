import { Alert, Button, styled } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useAuth from '../../../../hooks/useAuth';
import useRefMounted from '../../../../hooks/useRefMounted';

const ImgWrapper = styled('img')(
  ({ theme }) => `
    margin-right: ${theme.spacing(1)};
    width: 32px;
`,
);

const LoginAuth0 = () => {
  const { loginWithPopup } = useAuth();
  const [error, setError] = useState(null);
  const isMountedRef = useRefMounted();
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
    } catch (err) {
      console.error(err);
      if (isMountedRef.current) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      <Button
        fullWidth
        size="large"
        variant="outlined"
        sx={{
          py: 2,
        }}
        onClick={handleLogin}
      >
        <ImgWrapper alt="Auth0" src="/static/images/logo/auth0.svg" />
        {t('Sign in with')} Auth0
      </Button>
    </>
  );
};

export default LoginAuth0;
